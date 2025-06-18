// requiring dotenv file
require("dotenv").config();

// requiring http
const http = require("http");
const { routeHandler } = require("./routes/routing.js");
 
// importing port from env
const port = process.env.PORT || 3001;

const server = http.createServer((req, res) => {
  //imported route handler to take care of the .end shtuffff, cleaner, but is it right?
  routeHandler(req, res);
});

server.listen(port, () => {
  console.log(
    "\n... Running on port",
    port,
    `\n\n... lets see what we can do next at http://localhost:${port}/`
  );
});
