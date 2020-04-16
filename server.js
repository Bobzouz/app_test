var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get("/", function(req, res){
    res.sendFile(__dirname + '/index.html');
})

io.on('connection', function(socket){
    console.log('user connecté');
    socket.on('disconnect', function(){
        console.log('user déconnecté');
    })
    socket.on('chat message', function(msg){
        console.log('message recu : ' + msg)
        io.emit('chat message', msg); // renvoie le message au client pour affichage
    })
})

http.listen(3000, function(){
    console.log("server running on 3000")
})