var path = require("path");

// Routes
// =============================================================
module.exports = function(app) {

  // Each of the below routes just handles the HTML page that the user gets sent to.

  // index route loads view.html
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });

  // cms route loads cms.html
  app.get("/pageOne", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/pageOne.html"));
  });

  // blog route loads blog.html
  app.get("/pageTwo", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/pageTwo.html"));
  });

  app.get("/pageThree", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/pageThree.html"));
  });

};
