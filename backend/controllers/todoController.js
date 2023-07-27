const {addTodo, changeTodo, removeTodo} = require("../services/todoServices");
const jwt = require("jsonwebtoken")


const postTodo = (req, res) =>{
    const userId = req.params.id;
    const todo = req.body.todo;

    const successful = addTodo(userId, todo);
    if(successful.error){
        res.status(401).send(successful.message);
    }else{
   
        res.status(200).send(successful);
    }

}

const putTodo = (req, res) =>{
    const userId = req.params.userId;
    const todoId = req.params.todoId;

    const successful = changeTodo(userId, todoId);

    if(successful.error){
        res.status(404).send(successful.message);
    }else{
        res.status(200).send(successful)
    }
}

const deleteTodo = (req, res) =>{
    const userId = req.params.userId;
    const todoId = req.params.todoId;

    const successful = removeTodo(userId, todoId);

    if(successful.error){
        res.status(404).send(successful.message);
    }else{
        res.status(200).send(successful);
    }
}

module.exports = {postTodo, putTodo, deleteTodo};