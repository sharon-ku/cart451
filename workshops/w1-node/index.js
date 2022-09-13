// Import the library
const express = require('express');
const fileuploadMiddleWare = require("express-fileupload");

// Define the port number where the server should listen for requests
// We can have multiple web servers running on a machine
// Always define port number higher than 1000; the lower ones are already reserved (e.g. 80 is http)
const portNumber = 4200;

// Create an instance of the Express object (to access the methods and properties available)
const app = express();

// Define the app's routing -- HTTP server gives a router by default
// app.get is a specific case of app.use
app.get('/', requestHandler);

// Flag that if banana.html was requested, it will immediately go to error route
// Make sure to put before express.static...
app.use('/banana.html', errorRoute);

// Make everything in our public folder serviceable
// __dirname is the route directory of our project
app.use(express.static(__dirname + '/public'));
// Forward the requests.... (using a filter)
// vegRoutes and fruitRoutes are my middleware: they are scripts that run
app.use('/veg', vegRoutes);
app.use('/fruit', fruitRoutes);
// When I type localhost:4200/banana, it will take me to banana.html
app.use('/banana', bananaRoute);
app.use('/passingTheVars', handleGetVars);

app.use(fileuploadMiddleWare());
app.use('/dataUpload',handlePostedData);

// The request is the URL that the client requested
// The response is sent back to the client
function requestHandler(request, response) {
    // send a default response to the client...
    response.send("HELLO WORLD");
    console.log(request); //built in
    console.log(response); //built  in
    console.log(request.url);
}

function fruitRoutes(req, res, next) {
    // req is the Node.js http request object
    // res is the Node.js http response object
    // next is a function to call to invoke the next middleware
    console.log("IN FRUIT FUNCTION ");
    console.log(req);
    //  Get further url: e.g. if I do fruit/123, /123 will be logged
    console.log(req.url);
    res.send("WE ARE HERE FRUIT ROUTE");
}

function vegRoutes(req, res, next) {
    // req is the Node.js http request object
    // res is the Node.js http response object
    // next is a function to call to invoke the next middleware
    console.log("IN VEG FUNCTION ");
    console.log(req);
    res.send("WE ARE HERE VEG ROUTE");
}

function bananaRoute(req, res, next) {
    res.sendFile(__dirname + '/public/banana.html');
}

//new error route:
function errorRoute(req, res, next) {
    const error = new Error('Not valid url');
    res.send(error.message);
}

function handleGetVars(request, response, next) {
    console.log(request.url);
    // the request object will contain all the parameters that I want
    console.log(request.query);
    response.send("GOT IT! THANKS!");
}

function handlePostedData(request,response){
    console.log(request.body); //body of packet
    console.log(request.files); //request

    if(!request.files)
    {
        response.send("File was not found");
        return;
    }
    // using the name attributes of the form fields ...
    console.log("the color chosen:: "+request.body.color);
      console.log("the favorite city chosen:: "+request.body.city);
 
    // here is the field name of the form
    let  temp_file = request.files.imageF;
 
     let imagePath  = __dirname + '/public/images/'+request.files.imageF.name;
    // Use the mv() method to place the file somewhere on your server
    temp_file.mv(imagePath, function(err) {
    if (err)
        return response.status(500).send(err);
        response.send('File uploaded!');
     });
 }



// Allow the server to listen for incoming requests on port 4200
// Once this starts running, it never stops until you quit it
app.listen(portNumber, function () {
    console.log("Server is running on port " + portNumber);
});







