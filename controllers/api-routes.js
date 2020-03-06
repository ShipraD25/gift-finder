var db = require("../models");
var express = require("express");
var router = express.Router();
//var passport = require("../config/passport");
const axios = require("axios");

router.get("/api/gifts", (req, res) => {
  console.log(req.query.q)
    axios
      .get("https://openapi.etsy.com/v2/listings/active?keywords=" + req.query.q + "&limit=25&min_price=" + req.query.minPrice + "&max_price=" + req.query.maxPrice + "&includes=Images&sort_on=score&api_key=dggfhwkwf5yl2hsyp2mhwn38")
      .then(results => res.json(results.data))
      .catch(err => {console.log(err);res.status(422).json(err)});
    });

// router.get("/api/bookmarks", function (req, res) {
//     res.json({});
// });
router.post("/api/bookmark", function(req, res) {

  db.Bookmark.create({
    title: req.body.title,
    image: req.body.image,
    url: req.body.url,
    price: req.body.price,
    listing_id: req.body.listing_id
      })
      .then(function() {
          res.json({});
      })
      .catch(function(err) {
          res.status(401).json(err);
      });
});

module.exports = router;