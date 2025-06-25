const http = require("node:http");
const port = 5000;

const server = http.createServer((req,res)=>{
    res.writeHead(200,{"Content-Type": "text/plain"});
    res.end("Server working");
})

server.listen(port,()=>{
    console.log("server is running, looking good looking good");
})