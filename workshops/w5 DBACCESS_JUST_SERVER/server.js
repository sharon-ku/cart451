const express = require("express");
const portNumber = 4200;
const app = express(); //make an instance of express
const server = require("http").createServer(app);
require("dotenv").config();
const mongoose = require("mongoose");

let bodyParser = require('body-parser');
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies
app.use('/varsToMongo',handleGetVars);


const url = process.env.MONGODB_URI;
console.log(url);
const PhoneUseModel = require("./DBSchema.js");

// connect to db
mongoose.connect(url);
// contains name of my db
let db = mongoose.connection;
db.once("open", async function () {
  console.log("are here");

  // Query all entries with App as Insta and specific Date, and output only the App entries
  PhoneUseModel.find({App:"Instagram", Date:"08/26/2022"}, "App").then((result) => {
    console.log(result);
  })

  // Count how many Insta users there are
  let numInstagramUsers = await PhoneUseModel.countDocuments({App:"Instagram"});
  console.log(numInstagramUsers);

});


// make server listen for incoming messages
server.listen(portNumber, function () {
  console.log("listening on port:: " + portNumber);
});
// create a server (using the Express framework object)
app.use(express.static(__dirname + "/public"));
app.use("/client", clientRoute);
//default route
app.get("/", function (req, res) {
  res.send("<h1>Hello world</h1>");
});

function clientRoute(req, res, next) {
  res.sendFile(__dirname + "/public/client.html");
}

/// use this VERB for getting posted data... 9
app.post('/postForm',handlePost);
 
// the callback
function handlePost(request,response){
  console.log(request.body);
  response.send("SUCCESS POST");



}

//EXAMPLE of  user making a query ... 10
async function  handleGetVars  (request,response,next){
  console.log(request.url);
  console.log(request.query.paramOne);
  // response.send("SUCCESS GET");

  let results = await PhoneUseModel.find({App:request.query.paramOne});
  console.log(results[0]);
  response.send(results);
}

