const express = require('express');
const http = require('http');
const socketIO = require('socket.io');

// localhost port
const port = 4001

const app = express();

// server instance
const server = http.createServer(app);

// Socket using the instace of server
const io = socketIO(server);

// What the socket.io is
io.on('connection', socket => {
    console.log("NEW CLIENT IS CONNECTED!!!!");

    socket.on('change color', color => {
        console.log("SERVER SAYS: COLOR CHANGED TO: ", color);

        io.sockets.emit('change color', color);
    });

    // Occurs if client leaves the server
    socket.on('disconnect', () => {
        console.log('USER DISCONNECTED!!!!!!');
    });

});

server.listen(port, () => console.log(`LISTENING ON PORT ${port}!!!!!!!`));