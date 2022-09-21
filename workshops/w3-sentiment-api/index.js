//import the Express library
let express = require('express');
const portNumber =4200;
let app = express(); //make an insatnce of express
let httpServer = require('http').createServer(app);  // create a server (using the Express framework object)
 
// serving static files
let static = require('node-static'); // for serving static files (i.e. css,js,html...)
// serve anything from this dir ...
app.use(express.static(__dirname + '/public'));

// "body parser" is need to deal with post requests
let bodyParser = require('body-parser');
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

const CustomSentiModule = require('./CustomSentiModule');
let customSentiModInstance = new CustomSentiModule();


//default route
app.get('/', function(req, res){
  res.send('<h1>Hello world</h1>');
});
 
// make server listen for incoming messages
httpServer.listen(portNumber, function(){
  console.log('listening on port:: '+portNumber);
})


 
//make a route to sentiment page...
app.get('/clientSentiment', function(req, res) {
    res.sendFile(__dirname + '/public/clientSentiment.html');
});

/// use this VERB for getting posted data...
app.post('/getSentiment',handlePost);
 
// the callback
function handlePost(request,response){
  console.log(request.body.clientPhrase);
}