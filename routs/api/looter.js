// POST for creating new character 
// POST  for logging in 
// PUT for loot grabs 
// GET for logging out 
// GET for user data 
// GET for all available loot
var express = require("express");
var db = require("../../models");
var passport = require("../../config/passport");
var router = express.Router();

router.post("/api/login", passport.authenticate("local"), function (req, res) {
    console.log("got to login")
    res.json(req.user);
  });

  router.post("/api/signup", function (req, res) {
    db.User.create({
      userName: req.body.userName,
      password: req.body.password
    })
      .then(function (req) {
        res.redirect(307, "/api/login");
      })
      .catch(function (err) {
        res.status(401).json(err);
      });
  });