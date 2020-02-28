var db = require("../models");
var express = require("express");
var router = express.Router();
//var passport = require("../config/passport");

router.get("/api/bookmarks", function (req, res) {
    res.json({});
});

module.exports = router;