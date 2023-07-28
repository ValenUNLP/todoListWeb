const express = require("express");
const {deleteUser} = require("../controllers/userController");
const { authenticateJWT } = require("../middleware");

const router = express.Router();

router.delete("/:id",authenticateJWT ,deleteUser);


module.exports = router;