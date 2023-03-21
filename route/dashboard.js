const express = require("express");
const router = express.Router();
const users = require("./../controller/userController");
const { isLoggedIn } = require("./../middleware");

router.route("/").get(isLoggedIn, users.dashboard);

module.exports = router;
