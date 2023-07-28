const fs = require("fs");
const DB_FILE = "./db.json";
const {removeUserDB} = require("../dbActions");



const REMOVE_USER_ERROR = {
    error:true,
    message: "User not found"
}



const removeUser = (id) =>{
    let removed = removeUserDB(id);

    if(!removed) return REMOVE_USER_ERROR;

    return removed;
}




module.exports = {removeUser};