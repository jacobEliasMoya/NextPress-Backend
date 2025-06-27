import { createServer } from "node:http";
const port = 5000;
const host = "localhost";

const server = createServer((req, res) => {
  const { method, url } = req;

  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");

  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, OPTIONS"
  );

  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");

  if (method.toLowerCase() === "options") {
    res.writeHead(204);
    res.end();
    return;
  }

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
