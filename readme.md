# 20-04-21 9am,  *Making a video chat app*

useful links : [Setup](#setting-up), [Notes](#making-a-room-with-unique-id), 
## Setting up

open a terminal and type 
```
npm install
```
this gives us 
1. express(node's framework)
2. uuid is used to generate unique id's that will denote our room names
3. EJS is a simple templating language that lets you generate HTML markup with plain JavaScript
4. Socket.IO is a library that enables real-time, bidirectional and event-based communication between the browser and the server
basically it helps creating a backend socket it will help us in making other people join the rooms
5. so that we dont have to restart out server with each change

now to start the server we have to use ```npm run dev```

# Guide 

if you want to check how this was build you can read the notes [here](https://github.com/AnshSharmaa/Mern-notes/tree/main/20-04-21/morning)