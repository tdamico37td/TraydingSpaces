var path = require("path");

module.exports = function(app) {
	
	app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });

	app.get("/quiz", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/quiz.html"));
  });

  app.get("*", function(req, res, next) {
    if(req.url.indexOf('/api') == 0) return next();
    // if(req.url.indexOf('/assets') == 0) return next();
    // if(req.url.indexOf('/css') == 0) return next();
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });
}