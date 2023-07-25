const express = require("express");
const {registerUser, deleteUser} = require("../controllers/userController");

const router = express.Router();

router.post("/user", registerUser);

router.delete("/user/:id", deleteUser);

module.exports = router;