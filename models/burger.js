// Import the ORM to create functions that will interact with the database.
const orm = require("../config/orm.js");

const burger = {
  selectAll: function(callback) {
    orm.selectAll("burgers", function(res) {
      callback(res);
    });
  },
  // The variable vals is an  array.
  insertOne: function(vals, callback) {
    // modify below to add devoured
    orm.insertOne("burgers", "burger_name", vals, function(res) {
      console.log("Add a Burger to be eaten: ", vals)
      callback(res);
    });
  },
  // Modify your updateOne
  updateOne: function(colVal, id, callback) {
    orm.updateOne("burgers", colVal, id, function(res) {
      callback(res);
    });
  }
};

module.exports = burger;