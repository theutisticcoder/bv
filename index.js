const app = require('express')();
const server = require('http').createServer(app);
const io = require('socket.io')(server);
const port = process.env.PORT || 3000;
app.get('/', function(req, res) {
  res.sendfile('index.html');
});
server.listen(port, function() {
  console.log(`Listening on port ${port}`);
});
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
