const express = require("express");
const { registeruser, loginUser } = require("../controller/user");

const router = express.Router();

router.route("/register").post(registeruser);
router.route("/login").post(loginUser);

module.exports = router;