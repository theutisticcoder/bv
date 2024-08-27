const io = require('socket.io')(3000);
var exec = require('child_process').execFile;


io.on('connection', (socket) => {
    console.log('Client connected');

    // Emit an event to the client
    socket.emit('load-player');    
    socket.on('x', coo=> {
        console.log(coo);
        socket.broadcast.emit("playmovex", coo);
    });
     socket.on('y', coo=> {
                console.log(coo);
        socket.broadcast.emit("playmovey", coo);
    });

    // Handle events from the client
    
});
