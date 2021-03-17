// DEPENDENCIES
// Series of npm packages that we will use to give our server useful functionality
var mysql = require("mysql");
var express = require("express");

// EXPRESS CONFIGURATION
// This sets up the basic properties for our express server
var connection = mysql.createConnection ({
    port: 3306,
    host:"127.0.0.1",
    user: "root",
    password: "password123",
    database:"friendlist"
});
// console.log(mysql);
// connect to the mysql server sql database
connection.connect((err) => {
    if (err) {
        console.error(`Unable to connect ${err}`);
        return;
    }
    console.log(`We've connected to ${connection.threadId}. Time to make new friends!`);
});

// Tells node that we are creating an "express" server
var app = express();

// Sets an initial port. We'll use this later in our listener
var PORT = process.env.PORT || 5000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// ROUTER
// The below points our server to a series of "route" files
// These routes give our server a "map" of how to respond when users visit or request data from various URLs

require("./app/routes/apiRoutes")(app,connection);
require("./app/routes/htmlRoutes")(app);


// LISTENER
// The below code effecitvely "starts" our server

app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
});