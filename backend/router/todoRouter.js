const express = require("express");
const {postTodo, putTodo, deleteTodo} = require("../controllers/todoController");
const {authenticateJWT} = require("../middleware");

const router = express.Router();

router.post("/:id",authenticateJWT ,postTodo);

router.put("/:userId/:todoId",authenticateJWT ,putTodo);

router.delete("/:userId/:todoId",authenticateJWT ,deleteTodo);


module.exports = router;