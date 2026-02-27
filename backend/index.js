import express from "express";
import {Server} from "socket.io";
import http from "http";
const app = express();


const httpServer = http.createServer(app);

const socketServer = new Server(httpServer, {
    cors : {
        origin : "*"
    }
});

socketServer.on("connection", (socket) => {
    console.log("a client connected with id : ", socket.id); 
    
    socket.on("message", (data) => {
        console.log("message from client : ", data);
    });

    socket.on("disconnect", () => {
        console.log("client disconnected with id : ", socket.id);
    });
});

socketServer.on("error", (err) => {
    console.log("socket server error : ", err);
});

httpServer.listen(3279, () => {
    console.log("server is listening on port 3279");
});


