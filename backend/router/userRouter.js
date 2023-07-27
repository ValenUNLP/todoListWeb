const express = require("express");
const {registerUser, deleteUser, login} = require("../controllers/userController");
const { authenticateJWT } = require("../middleware");

const router = express.Router();

router.post("/", registerUser);

router.delete("/:id",authenticateJWT ,deleteUser);

router.post("/login", login);

module.exports = router;