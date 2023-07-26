const {addTodoDB} = require("../dbActions");
const {generateId} = require("../util");

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
    
    addTodoDB(userId, newTodo);
    return "Todo added";
}

module.exports = {addTodo};