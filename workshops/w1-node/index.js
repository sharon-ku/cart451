// Import the library
let express = require('express');

// Define the port number where the server should listen for requests
// We can have multiple web servers running on a machine
// Always define port number higher than 1000; the lower ones are already reserved (e.g. 80 is http)
const portNumber = 4200;

// Create an instance of the Express object (to access the methods and properties available)
const app = express();

// Define the app's routing -- HTTP server gives a router by default
app.get('/', requestHandler);

// The request is the URL that the client requested
// The response is sent back to the client
function requestHandler(request,response){
    // send a default response to the client...
    response.send("HELLO WORLD");
        console.log(request); //built in
        console.log(response); //built  in
    console.log(request.url);
}


// Allow the server to listen for incoming requests on port 4200
// Once this starts running, it never stops until you quit it
app.listen(portNumber, function() {
    console.log("Server is running on port " + portNumber);
});







