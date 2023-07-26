const express = require("express");
const {registerUser, deleteUser} = require("../controllers/userController");

const router = express.Router();

router.post("/", registerUser);

router.delete("/:id", deleteUser);

module.exports = router;