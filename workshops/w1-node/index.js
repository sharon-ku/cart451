// Import the library
let express = require('express');

// Define the port number where the server should listen for requests
// We can have multiple web servers running on a machine
// Always define port number higher than 1000; the lower ones are already reserved (e.g. 80 is http)
const portNumber = 4200;

// Create an instance of the Express object (to access the methods and properties available)
const app = express();

// Define the app's routing -- HTTP server gives a router by default
// app.get is a specific case of app.use
app.get('/', requestHandler);
// Forward the requests.... (using a filter)
// vegRoutes and fruitRoutes are my middleware: they are scripts that run
app.use('/veg', vegRoutes);
app.use('/fruit',fruitRoutes);

// The request is the URL that the client requested
// The response is sent back to the client
function requestHandler(request,response){
    // send a default response to the client...
    response.send("HELLO WORLD");
    console.log(request); //built in
    console.log(response); //built  in
    console.log(request.url);
}

function fruitRoutes(req, res, next){
    // req is the Node.js http request object
    // res is the Node.js http response object
    // next is a function to call to invoke the next middleware
     console.log("IN FRUIT FUNCTION ");
     console.log(req);
    //  Get further url: e.g. if I do fruit/123, /123 will be logged
     console.log(req.url);
     res.send("WE ARE HERE FRUIT ROUTE");
}

function vegRoutes(req, res, next){
    // req is the Node.js http request object
   // res is the Node.js http response object
   // next is a function to call to invoke the next middleware
   console.log("IN VEG FUNCTION ");
   console.log(req);
  res.send("WE ARE HERE VEG ROUTE");
 }

// Allow the server to listen for incoming requests on port 4200
// Once this starts running, it never stops until you quit it
app.listen(portNumber, function() {
    console.log("Server is running on port " + portNumber);
});







