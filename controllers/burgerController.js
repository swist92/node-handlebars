var express = require("express");

var router = express.Router();

// Import the model (burger.js) to use its database functions.
var burger = require("../models/burger.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function (req, res) {
  burger.selectAll(function (data) {
    console.log(data);
    var burgerObject = {
      burgers: data,
    };
    console.log(burgerObject);
    res.render("index", burgerObject);
  });
});

router.post("/insertOne", function (req, res) {
  burger.insertOne(req.body.burgers_name, function (vals) {
    res.redirect("/")
  });
});

router.post("/updateOne/:id", function (req, res) {
  var condition = "id = " + req.params.id;
  console.log("Condition is = " + condition);
  burger.updateOne({
    eaten: req.body.eaten
  }, condition, function () {
    res.redirect("/");
  });
});

// Export routes for server.js to use.
module.exports = router;