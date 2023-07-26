const fs = require("fs");
const DB_FILE = "./db.json";

const addUserDB = (user) =>{
    let db = JSON.parse(fs.readFileSync(DB_FILE));
    db.push(user);
    fs.writeFileSync(DB_FILE, JSON.stringify(db, null, 2));
}

const searchUserDB = (username, password) =>{
    let db = JSON.parse(fs.readFileSync(DB_FILE));
    return db.find(el => el.username ==  username && el.password == password);

}


const removeUserDB = (id) =>{
    let db = JSON.parse(fs.readFileSync(DB_FILE));
    const userIndex = db.findIndex((user) => user.id == id);
    if(userIndex == -1) return false;

    db.splice(userIndex, 1);
    fs.writeFileSync(DB_FILE, JSON.stringify(db, null, 2));
    return true;
}

const addTodoDB = (userId, todo) => {
    let db = JSON.parse(fs.readFileSync(DB_FILE));
    const userIndex = db.findIndex(el => el.id ==  userId);
    if(userIndex == -1) return false;

    db[userIndex].todos.push(todo);
    fs.writeFileSync(DB_FILE, JSON.stringify(db, null, 2));
    return true;
}


const changeTodoCheckDB = (userId, todoId) => {
    let db = JSON.parse(fs.readFileSync(DB_FILE));
    const userIndex = db.findIndex(el => el.id ==  userId);
    if(userIndex == -1) return false;
    const todoIndex = db[userIndex].todos.findIndex(el => el.id = todoId);
    if(todoIndex == -1) return false;

    const actualCheck = db[userIndex].todos[todoIndex].cheked;
    let newCheck;

    actualCheck ? newCheck = false : newCheck = true;

    db[userIndex].todos[todoIndex].cheked = newCheck;

    fs.writeFileSync(DB_FILE, JSON.stringify(db, null, 2));
    return true;
}

const removeTodoDB =  (userId, todoId) => {

    let db = JSON.parse(fs.readFileSync(DB_FILE));
    const userIndex = db.findIndex(el => el.id ==  userId);
    if(userIndex == -1) return false;
    const todoIndex = db[userIndex].todos.findIndex(el => el.id = todoId);
    if(todoIndex == -1) return false;

    db[userIndex].todos.splice(todoIndex, 1);

    fs.writeFileSync(DB_FILE, JSON.stringify(db, null, 2));
    return true;

}

module.exports = {addUserDB, searchUserDB, removeUserDB, addTodoDB, changeTodoCheckDB, removeTodoDB};