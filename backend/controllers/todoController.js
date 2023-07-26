const {addTodo} = require("../services/todoServices");


const postTodo = (req, res) =>{
    const userId = req.params.id;
    const todo = req.body.todo;
    console.log(todo);
    const successful = addTodo(userId, todo);
    res.status("200").send(successful);
}

module.exports = {postTodo};