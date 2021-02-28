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
    // socket.on("getResponse",(room)=>{
    //     fs.readFile(resolve(__dirname, "todo.json"), 'utf8', (err, data) => {
    //         if (err) {
    //            io.emit('responseErr',err)
    //             console.log(err);
    //         }
    //         io.emit('responseData', data);
    //         // console.log(data);
    //     });
    // })
    // socket.on("saveData",(data)=>{
    //     fs.writeFile(resolve(__dirname, "todo.json"), JSON.stringify(data, null, 4), 'utf8', (err) => {console.log(err)});
    // })


});
app.get("/all", (req, res) => {


    fs.readFile(resolve(__dirname, "todo.json"), 'utf8', (err, data) => {
        if (err) {
            console.log(err)
        }
        res.send(data);
    });


})
app.post("/post", (req, res) => {

    fs.writeFile(resolve(__dirname, "todo.json"), JSON.stringify(req.body, null, 4), 'utf8', (err) => {console.log(err)});
})

httpServer.listen(8000);
