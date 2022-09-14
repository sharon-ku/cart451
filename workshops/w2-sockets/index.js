//import the Express library
let express = require('express');
const portNumber = 4200;
let app = express(); //make an instance of express
let server = require('http').createServer(app);  // create a server (using the Express framework object)

// serving static files
let static = require('node-static'); // for serving static files (i.e. css,js,html...)
const fs = require('fs');

//call the require statement
const WebSocket = require("ws");
// make an instance of the web socket server and pass http {server} as parameter 
const wss = new WebSocket.Server({ server });


// serve anything from this dir ...
app.use(express.static(__dirname + '/public'));
//make a route to test page...(put ontop of the first app.use())
app.use('/wsC', wsClientRequestRoute);



//default route
app.get('/', function (req, res) {
    res.send('<h1>Hello world</h1>');
});


//and the function:
function wsClientRequestRoute(req, res, next) {
    res.sendFile(__dirname + '/public/ws.html');
}

// make server listen for incoming messages
server.listen(portNumber, function () {
    console.log('listening on port:: ' + portNumber);
})

// IMPLEMENT THE BROADCAST FUNCTION TO ALL
wss.broadcast = function broadcast(data) {
    //get all clients (note that the Socket server instance does maintain a list of clients)
    wss.clients.forEach(function each(client) {
        //if client is there
        if (client.readyState === WebSocket.OPEN) {
            client.send(data);
        }
    });
};


//wss listens for the connection event for incoming sockets, and if one is connected -:
//ws is  a single socket instance
//req is the request
wss.on('connection', function connection(ws, req) {
    const in_ip = req.connection.remoteAddress;
    //log to SERVER console
    console.log(`a connection has been established from ${in_ip}`);
    //use the socket instance to SEND message back
    ws.send("test message from server");

    // when I receive something as labelled as 'message', this function will run
    ws.on('message', function incoming(message) {
        // // console.log('received: %s', message);
        // fs.writeFile("test.jpg", message, 'binary', function (err) {
        //     if (err) throw err;
        //     console.log('File saved.')
        // });

        let jsonParse = JSON.parse(message);
        // console.log(jsonParse);

        if (jsonParse.eventName === "default") {
            console.log("DEFAULT");
            console.log(jsonParse.payload);

        }
        if (jsonParse.eventName === "stringLabel") {
            console.log("STRING");
            console.log(jsonParse.payload);
            wss.broadcast(jsonParse.payload);

        }
        if (jsonParse.eventName === "jsonLabel") {
            console.log("JSON");
            console.log(jsonParse.payload.text);

            wss.clients.forEach(function each(client) {
                if (client !== ws && client.readyState === WebSocket.OPEN) {
                    client.send(jsonParse.payload.text);
                }
            });

        }



    });
});



