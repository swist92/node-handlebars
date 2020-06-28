const express = require("express");

const router = express.Router();

// Import the model (burger.js) to use its database functions.
const burger = require("../models/burger.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function (req, res) {
  burger.selectAll(function (data) {
    const burgerObject = {
      burgers: data,
    };
    res.render("index", burgerObject);
  });
});

router.post("/api/burgers", function (req, res) {
  console.log(req.body);
  burger.insertOne(req.body.burger_name, function (result) {
    res.redirect("/");
  });
});

router.put("/api/burgers/:id", function (req, res) {
  burger.updateOne(req.params.id, function (result) {
    console.log(result);
    console.log("eaten!");
    res.redirect("/");
    //res.sendStatus(200);
  });
});

// router.put("/api/burgers/:id", function (req, res) {
//   const condition = "id = " + req.params.id;
//   console.log("Condition is = " + condition);
//   burger.updateOne(
//     {
//       eaten: req.body.eaten,
//     },
//     condition,
//     function () {
//       res.redirect("/");
//     }
//   );
// });

// Export routes for server.js to use.
module.exports = router;
