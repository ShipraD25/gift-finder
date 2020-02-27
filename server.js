const express = require("express");
//var session = require("express-session");
// Requiring passport as we've configured it
//var passport = require("./config/passport");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 8080;

var db = require("./models");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// We need to use sessions to keep track of our user's login status
//app.use(session({ secret: "keyboard cat", resave: true, saveUninitialized: true }));
//app.use(passport.initialize());
//app.use(passport.session());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
  }


var apiRoutes = require("./controllers/api-routes");
app.use(apiRoutes);

var htmlRoutes = require("./controllers/html-routes");
app.use(htmlRoutes);


db.sequelize.sync().then(function() {
    app.listen(PORT, function() {
        console.log("App listening on PORT " + PORT);
    });
});