
// this script runs when they enter the url and it fires an event(join-room)
const socket = io('/');

const videoGrid = document.getElementById('video-grid');
const myVideo = document.createElement('video');
//so that we don't hear our own voice
myVideo.muted = true

// telling the peer to connect on port
const myPeer = new Peer(undefined, {
    host: '/',
    port: '3001',
})

// sets params for our video feed and sends it to our function(a)
navigator.mediaDevices.getUserMedia({
    video: true,
    audio: true,
}).then(stream => {
    addVideoStream(myVideo, stream)

    // calls connectToNewUser when user-connected event is fired
    socket.on('user-connected', userId => {
        connectToNewUser(userId, stream)
    })

    myPeer.on('call', call => {
        call.answer(stream);
    })
})

// this sends the roomid and userid to the socket in out server side 
myPeer.on('open', id => {
    socket.emit('join-room', ROOM_ID, id)
})

// adds the new user to video grid
function connectToNewUser(userId, stream) {
    const call = myPeer.call(userId, stream);
    const video = document.createElement('video')

    call.on('stream', userVideoStream => {
        addVideoStream(video, userVideoStream);
    })
    call.on('close', () => {
        video.remove();
    })
}

function addVideoStream(video, stream) {
    video.srcObject = stream;
    // tells the function to play video after all the metadata is loaded
    video.addEventListener('loadedmetadata', () => {
        video.play();
    });
    videoGrid.appendChild(video);
}