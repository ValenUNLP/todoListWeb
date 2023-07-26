const {addTodo} = require("../services/todoServices");


const postTodo = (req, res) =>{
    const userId = req.params.id;
    const todo = req.body.todo;
    const successful = addTodo(userId, todo);
    if(successful.error){
        res.status("404").send(successful.message);
    }else{

        res.status("200").send(successful);
    }
}

module.exports = {postTodo};