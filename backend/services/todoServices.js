const {addTodoDB, searchUserByIdDB} = require("../dbActions");
const {generateId} = require("../util");

const USER_NOT_FOUND_ERROR = {
    error: true,
    message: "User not foud",
}

/*
  const todo = {
    id,
    goal,
    importance,
    cheked,
  }  
*/

const addTodo = (userId, todo) =>{
    const newTodo = {
        id: generateId(),
        goal: todo.goal,
        importance: todo.importance,
        cheked: false
    }

    const added = addTodoDB(userId, newTodo);
    if(!added) return USER_NOT_FOUND_ERROR;
    return "Todo added";
}

module.exports = {addTodo};