const fs = require("fs");
const DB_FILE = "./db.json";
const {addUserDB, searchUserDB, removeUserDB} = require("../dbActions");
const {generateId, clientData} = require("../util");

const REGISTERED_USER_ERROR = {
    error: true,
    message: "Already registered user"
}

const REMOVE_USER_ERROR = {
    error:true,
    message: "User not found"
}

const addUser = (username, password, name)=> {
    if(!fs.existsSync(DB_FILE)){
        fs.writeFileSync(DB_FILE, JSON.stringify([]));
    }

    if(searchUserDB(username, password) !== undefined) return REGISTERED_USER_ERROR; 

    let newUser = {
        id: generateId(),
        name,
        username,
        password,
        todos: []
    }

    addUserDB(newUser);
    return clientData(newUser);
}

const removeUser = (id) =>{
    let removed = removeUserDB(id);

    if(!removed) return REMOVE_USER_ERROR;

    return removed;
}



module.exports = {addUser, removeUser};