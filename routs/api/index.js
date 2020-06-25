const router = require("express").Router();
const looter = require("./looter");


router.use(looter);

module.exports = router;
