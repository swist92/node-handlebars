// Import the ORM to create functions that will interact with the database.
const orm = require("../config/orm.js");

const burger = {
  selectAll: function(callback) {
    orm.selectAll("burgers", function(res) {
      callback(res);
    });
  },
  // The variables cols and vals are arrays.
  insertOne: function(cols, vals, callback) {
    // TODO: modify below to add devoured
    orm.insertOne("burgers", "burger_name",cols, vals, function(res) {
      console.log("Add a Burger to be eaten: ")
      callback(res);
    });
  },
  // TODO: Modify your updateOne
  updateOne: function(objColVals, condition, callback) {
    orm.updateOne("burgers", objColVals, colVal, condition, id, function(res) {
      callback(res);
    });
  }
};

module.exports = burger;