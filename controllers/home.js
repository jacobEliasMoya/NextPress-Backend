const fs = require("fs");
const path = require("path");

const homeController = (req, res) => {
  const filePath = path.join(__dirname, "..", "views", "index.html");

  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.statusCode = 500;
      res.setHeader("Content-Type", "text/plain");
      res.end("Error loading home page");
    } else {
      res.statusCode = 200;
      res.setHeader("Content-Type", "text/html");
      res.end(data);
    }
  });
};

module.exports = {
  homeController,
};
