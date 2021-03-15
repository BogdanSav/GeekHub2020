const express = require("express");
const PORT = process.env.PORT || 8000;
const {resolve} = require("path");
const fs = require("fs");
const bodyParser = require("body-parser");
const useSocket = require("socket.io");

const app = express();
const httpServer = require("http").createServer(app);
const io = useSocket(httpServer);





app.use(express.static(
    resolve(__dirname, "dist")
));
app.use(bodyParser.json())

io.on("connection", (socket) => {
    console.log("connected",socket.id);

    socket.on("setData",(data)=>{
        io.emit("getData",data);
    })
    socket.on("modify",()=> {
        io.emit("modified");
    })

});
app.get("/all", (req, res) => {


    fs.readFile(resolve(__dirname, "todo.json"), 'utf8', (err, data) => {
        if (err) {
            // res.send(err)
        }
        res.send(data);
    });


})
app.post("/addNew", (req, res) => {

    fs.writeFile(resolve(__dirname, "todo.json"), JSON.stringify(req.body, null, 4), 'utf8', (err) => {res.send(err)});
})
app.post("/deleteTodo", (req, res) => {

    fs.writeFile(resolve(__dirname, "todo.json"), JSON.stringify(req.body, null, 4), 'utf8', (err) => {console.log(err)});
})
app.post("/setComplete", (req, res) => {

    fs.writeFile(resolve(__dirname, "todo.json"), JSON.stringify(req.body, null, 4), 'utf8', (err) => {console.log(err)});
})



httpServer.listen(8000);
