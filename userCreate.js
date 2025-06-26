const http = require("node:http");
const port = 5000;
const host = "localhost";

const server = http.createServer((req, res) => {

  const {method,url} = req;

  if(method.toLowerCase() === "post" && url.toLowerCase() === "http://localhost:5000/" ){
    res.statusCode = 200;
    res.setHeader("Content-Type","text/plain");
    res.end("Looks to have sent some data")
  }

});

server.listen(port, host, () => {
  console.log("server is running, looking good looking good");
});
