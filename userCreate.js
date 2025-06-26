const http = require("node:http");
const port = 5000;
const host = "localhost";

const server = http.createServer((req, res) => {
  const { method, url } = req;

  if (method.toLowerCase() === "post" && url === "/") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify({ message: "Looks to have some yummy data" }));
  } else {
    res.statusCode = 404;
    res.setHeader("Content-Type", "text/plain");
    res.end("Not Found");
  }
});

server.listen(port, host, () => {
  console.log("server is running, looking good looking good");
});
