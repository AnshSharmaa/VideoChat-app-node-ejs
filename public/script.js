// this script runs when they enter the url and it fires an event(join-room)
const socket = io('/');

// this sends the roomid and userid(hardcoded) to the socket in out server side 
socket.emit('join-room', ROOM_ID, 10);