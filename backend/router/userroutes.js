const express = require("express");
const { registeruser } = require("../controller/user");

const router = express.Router();

router.route("/register").post(registeruser);

module.exports = router;