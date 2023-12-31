const fs = require("fs");
const crypto = require("crypto");

const clientData = (user) =>{
    return {
        id: user.id,
        name: user.name,
        todo: user.todos
    }
}

const generateId = () => crypto.randomBytes(16).toString('hex');


module.exports = {clientData, generateId};