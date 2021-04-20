const { Socket } = require('dgram');
const express = require('express');
const app = express();
const server = require('http').Server(app); // we made an external server and initialized it in app
const io = require('socket.io')(server); // passiong the server to socket io
const { v4: uuidV4 } = require('uuid'); //importing uuid

app.set('view engine', 'ejs'); // telling the server to use the ejs view engine(to create html with plain js)
app.use(express.static('public')); // telling the server to look into public folder for files

// http://localhost:3000/ will redir the user to a particular room(/:room)
app.get('/', (req, res) => {
    res.redirect(`${uuidV4()}`); // creating a new uuid
});

// now we are using a dynamic param room which will be generated from uuid
app.get('/:room', (req, res) => {
    res.render('room', { roomID: req.params.room });
})

// making a socket and telling it what to do when there is a connection and when join-room
// this is in socket io syntax
io.on('connection', socket => {
    socket.on('join-room', (roodID, userId) => {
        console.log(roodID, userId);
    })
})

server.listen(3000, () => {
    console.log('running on 3000')
});