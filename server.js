// Jacobs Server
// I will be creating the beginning of a node server, no express, just node - server core methods only in these parts
// 1 - handle a simple user creation method.

const http = require("node:http"); // explicitly importing nodes v16+ node: to ensure that a core node module is being imported, no others / reduces any mis-imports
const { json } = require("node:stream/consumers");

const hostname = "127.0.0.1"; // settting localhost as the main host
const port = 5000; // working on port 5000, using the 3000s on the frontend and other running applications

const server = http.createServer((req, res) => {
  // setting statusCodes as well as the header and inner text to confirm server is up
  const { method } = req;

  if (method.toLowerCase() === "post") {
    // data as a stream is normally a string, most of the time, new users, so on
    let body = "";

    // once data is recieved, it comes in as chunks of data, async - so when we get that data chunk ~ a string, we concat into the existing body string, piece by piece
    req.on("data", (chunk) => {
      body += chunk;
    });

    // the req will essneitall send an 'end' notification here, and req.on listening in this case, is waiting to ~hear and 'end', once recieved we will parse the final body as a json object to be handled accordingly, dependant on the app.

    req.on("end", () => {
      // wrapping in a try catch acts a way to catch if there were any issues w/ the JSON received, safer and prevents errors/ a crashed server!
      try {
        // so we will then parse the body if all is well, to convert the data stream into a JSON object
        const finalParse = JSON.parse(body);
        // writing the header, which is still Content-type, app json data we are handling, 201 meaning request has successed, and new resource was created
        res.writeHead(201, { "Content-Type": "application/json" });

        // different from on end, this is the final message to client, and closes the connection
        res.end(
          JSON.stringify({
            message: "data recieved",
            data: finalParse,
          })
        );
      } catch (err) {
        // on any error, return the bad request, the setting as text/plain, as there will be a simple err string
        res.writeHead(400, { "Content-Type": "text/plain" });
        res.end(`Server still up and running, error: ${err}`);
      }
    });
  }
});

// basically initiating the server to listen on the port and host
server.listen(port, hostname, () => {
  console.log(`Server is up and running on http://${hostname}:${port}/`);
});
