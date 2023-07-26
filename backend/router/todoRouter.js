const express = require("express");
const {postTodo, putTodo, deleteTodo} = require("../controllers/todoController");


const router = express.Router();

router.post("/:id", postTodo);

router.put("/:userId/:todoId", putTodo);

router.delete("/:userId/:todoId", deleteTodo);


module.exports = router;