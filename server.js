const express = require("express");
//var session = require("express-session");
//var passport = require("./config/passport");

const app = express();
const PORT = process.env.PORT || 8080;

var db = require("./models");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


//app.use(session({ secret: "keyboard cat", resave: true, saveUninitialized: true }));
//app.use(passport.initialize());
//app.use(passport.session());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}

var apiRoutes = require("./controllers/api-routes");
app.use(apiRoutes);

// var htmlRoutes = require("./controllers/html-routes");
// app.use(htmlRoutes);

db.sequelize.sync().then(function () {
    app.listen(PORT, function () {
        console.log("App listening on PORT " + PORT);
    });
});