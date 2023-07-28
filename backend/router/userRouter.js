const express = require("express");
const {deleteUser, getUser} = require("../controllers/userController");
const { authenticateJWT } = require("../middleware");

const router = express.Router();

router.delete("/:id",authenticateJWT ,deleteUser);

router.get("/:username", getUser);


module.exports = router;