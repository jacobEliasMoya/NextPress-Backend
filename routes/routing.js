const { aboutController } = require("../controllers/about");
const { homeController } = require("../controllers/home");

const routeHandler = (req, res) => {
  const url = req.url;
  const method = req.method.toUpperCase();

  if (method === "GET") {
    switch (url) {
      case "/":
        homeController(req, res);
        break;
      case "/about":
        aboutController(req, res);
        break;
      default:
        res.statusCode = 404;
        res.end("Nothing here ... hmm ");
    }
  } else {
    res.statusCode = 405;
    res.end("Woah, sorry thats not allowed");
  }
};

module.exports = {
  routeHandler,
};
