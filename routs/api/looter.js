 
// PUT for loot grabs 
// GET for user data 
// GET for all available loot
//classes = speedy, big-boi, average-joe


var express = require("express");
var db = require("../../models");
var passport = require("../../config/passport");
var router = express.Router();

//log user in
router.post("/api/login", passport.authenticate("local"), function (req, res) {
  console.log("got to login")
  res.json(req.user);
});
// sign user up
router.post("/api/signup", function (req, res) {
  console.log("hit 1")
  console.log(req.body.password)
  db.user.create({
    userName: req.body.userName, 
    password: req.body.password
  })
    .then(function (req) {
      res.redirect(307, "/api/login");
    })
    .catch(function (err) {
      console.log(err)
      res.status(401).json(err);
    });
});
// logout user out 
router.get("/logout", function (req, res) {
  req.logout();
  res.redirect("/");
});

//create a new character 
router.put("/api/new_character", function (req, res) {
  console.log(req.user)
  db.PLayers.update(
    {
      number: req.body.number,
      name: req.body.name,
      class: req.body.class,
      health: req.body.health,
      damage: req.body.damage,
      speed: req.body.speed,
      ability: req.body.ability
    },
    {
      where: { id: req.user.id }
    }
  )
    .then(res => {

      console.log("succesful update!", res)
    });
})

//returns basic user info
router.get("/api/user_data", function (req, res) {
  if (!req.user) {
    // The user is not logged in, send back an empty object
    res.json({});
  } else {
    // Otherwise send back the user's email and id
    // Sending back a password, even a hashed password, isn't a good idea
    res.json({
      id: req.user.id,
      userName: req.user.userName,
      
    });
  }
});

module.exports = router;  
