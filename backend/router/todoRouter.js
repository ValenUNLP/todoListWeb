const express = require("express");
const {postTodo} = require("../controllers/todoController");

const router = express.Router();

router.post("/:id", postTodo);


module.exports = router;