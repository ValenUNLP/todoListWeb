const fs = require("fs");
const DB_FILE = "./db.json";
const {addUserDB, searchUserDB, removeUserDB} = require("../dbActions");
const jwt = require("jsonwebtoken");
const {generateId, clientData} = require("../util");

const REGISTERED_USER_ERROR = {
    error: true,
    message: "Already registered user"
}

const REMOVE_USER_ERROR = {
    error:true,
    message: "User not found"
}

const NO_REGISTERED_USER_ERROR = {
    error: true,
    message: "User no registered"
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

const loginUser = (username, password) =>{
    const user = searchUserDB(username, password);
    if(user == undefined) return NO_REGISTERED_USER_ERROR; 

    const token = jwt.sign({ user }, "valen", { expiresIn: "10hs" });

    return {
        ...clientData(user),
        token
    };

}



module.exports = {addUser, removeUser, loginUser};