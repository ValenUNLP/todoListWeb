
const {removeUserDB, searchUserDB} = require("../dbActions");

const NO_REGISTERED_USER_ERROR = {
    error: true,
    message: "User no registered"
}

const REMOVE_USER_ERROR = {
    error:true,
    message: "User not found"
}



const removeUser = (id) =>{
    let removed = removeUserDB(id);

    if(!removed) return REMOVE_USER_ERROR;

    return removed;
}

const searchUser = (username) =>{
    let finded = searchUserDB(username);

    if(!finded) return NO_REGISTERED_USER_ERROR;

    let {name, todos} = finded;
    return {name, todos};
}


module.exports = {removeUser, searchUser};