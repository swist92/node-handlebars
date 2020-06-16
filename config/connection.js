// Set up MySQL connection.
var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "gzp0u91edhmxszwf.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
  port: 3306,
  user: "qqt4mtimje1vglbs",
  password: "hwztd97smk8jxegv",
  database: "eogni1b6w4nvoldk"
});

// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;
