var db = require("../models");
var express = require("express");
var router = express.Router();


Router.get("/", function(req, res) {
    res.send("Hello");
});