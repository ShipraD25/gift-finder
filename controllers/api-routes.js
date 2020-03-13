var db = require("../models");
var express = require("express");
var router = express.Router();
var passport = require("../config/passport");
const axios = require("axios");

var isAuthenticated = require("../config/middleware/isAuthenticated")


router.get("/api/gifts", (req, res) => {
  console.log(req.query.q)
  axios
    .get("https://openapi.etsy.com/v2/listings/active?keywords=" + req.query.q + "&limit=25&min_price=" + req.query.minPrice + "&max_price=" + req.query.maxPrice + "&includes=Images&sort_on=score&api_key=dggfhwkwf5yl2hsyp2mhwn38")
    .then(results => res.json(results.data))
    .catch(err => { console.log(err); res.status(422).json(err) });
});

router.get("/api/trending", (req, res) => {
  console.log(req.query.q)
  axios
    .get("https://openapi.etsy.com/v2/listings/trending?limit=10&includes=Images&api_key=dggfhwkwf5yl2hsyp2mhwn38")
    .then(results => res.json(results.data))
    .catch(err => { console.log(err); res.status(422).json(err) });
});

router.post("/api/bookmarks", isAuthenticated, function (req, res) {

  db.Bookmark.create({
    title: req.body.title,
    image: req.body.image,
    url: req.body.url,
    price: req.body.price,
    UserId: req.user.id
    // listing_id: req.body.listing_id
  })
    .then(function () {
      res.json({});
    })
    .catch(function (err) {
      console.log(err);
      res.status(400).json(err);
    });
});

router.get("/api/bookmarks", isAuthenticated, function (req, res) {
  db.Bookmark.findAll({
    raw: true,
    where: {
      UserId: req.user.id
    }
  }).then(function (data) {
    res.json(data);
  });
});

router.delete("/api/bookmarks", (req, res) => {
  console.log(req.body)
  db.Bookmark.destroy({
    where: {
      id: req.body.id
    }
  }).then(function (data) {
    res.json(data);
  });
})

//Authentication Routes
router.post("/api/login", passport.authenticate("local"), function(req, res) {
  res.json(req.user);
});

router.post("/api/signup", function(req, res) {
  // here the password is not encrypted 
  db.User.create({
          email: req.body.email,
          password: req.body.password
      })
      .then(function() {
          res.redirect(307, "/api/login");
      })
});

router.get("/api/user", isAuthenticated, function(req, res) {
  res.json(req.user);
});

module.exports = router;