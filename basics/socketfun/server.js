const express = require('express')
const app = express()
const http = require('http').Server(app)
//
const io = require('socket.io')(http);

const counter = {count:0}

app.get('/',(req,res)=>{
    res.sendFile(__dirname +'/index.html')
})

io.on('connection', (socket) => {
    console.log('a user connected');
    counter.count++
    socket.emit('hello','Hello from the server')
    io.emit('setcounter', counter.count)

    socket.on('updaterequested',(text)=>{
        //counter.count++
        //io.emit('setcounter', counter.count)
        console.log('recieved text:', text)
        socket.broadcast.emit('updatefield',text)
    })
    });


http.listen(3000, ()=>{
    console.log('server running on port 3000')
})