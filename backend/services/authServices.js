const jwt = require("jsonwebtoken");
const fs = require("fs");
const DB_FILE = "./db.json";

const {addUserDB, searchUserDB} = require("../dbActions");
const {generateId, clientData} = require("../util");

const REGISTERED_USER_ERROR = {
    error: true,
    message: "Already registered user"
}

const NO_REGISTERED_USER_ERROR = {
    error: true,
    message: "User no registered"
}

const login = (username, password) =>{
    const user = searchUserDB(username, password);
    if(user == undefined) return NO_REGISTERED_USER_ERROR; 

    const token = jwt.sign({ user }, "valen", { expiresIn: "20s" });
    return {
        ...clientData(user),
        token
    };

}

const addUser = (username, password, name)=> {
    if(!fs.existsSync(DB_FILE)){
        fs.writeFileSync(DB_FILE, JSON.stringify([]));
    }

    if(searchUserDB(username) !== undefined) return REGISTERED_USER_ERROR; 

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

module.exports = {addUser, login};