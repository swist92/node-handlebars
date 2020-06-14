// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var burger = {
  selectAll: function(callback) {
    orm.selectAll("burgers", function(res) {
      callback(res);
    });
  },
  // The variables cols and vals are arrays.
  insertOne: function(vals, callback) {
    // TODO: modify below to add devoured
    orm.insertOne("burgers", "burger_name", vals, function(res) {
      console.log("Add a Burger to be eaten: ", vals)
      callback(res);
    });
  },
  // TODO: Modify your updateOne
  updateOne: function(objColVals, condition, callback) {
    orm.updateOne("burgers", colVal, id, function (res) {
      callback(res);
    });
  }
};

// Export the database functions for the controller (catsController.js).
module.exports = burger;