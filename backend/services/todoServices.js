const {addTodoDB, changeTodoCheckDB, removeTodoDB} = require("../dbActions");
const {generateId} = require("../util");

const USER_NOT_FOUND_ERROR = {
    error: true,
    message: "User not foud",
}

const USER_OR_TODO_NOT_FOUND_ERROR = {
    error: true,
    message: "User or todo not found",
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
    return newTodo;
}

const changeTodo = (userId, todoId) => {
    const change = changeTodoCheckDB(userId, todoId);

    if(!change) return USER_OR_TODO_NOT_FOUND_ERROR;

    return "Todo check change";
}

const removeTodo = (userId, todoId) =>{
    const removed = removeTodoDB(userId, todoId);
    if(!removed) return USER_OR_TODO_NOT_FOUND_ERROR;

    return "Todo removed";
}

module.exports = {addTodo, changeTodo, removeTodo};