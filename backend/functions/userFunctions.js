const fs = require("fs");
const crypto = require("crypto");
const DB_FILE = "./db.json";



const addUser = (username, password)=> {
    if(!fs.existsSync(DB_FILE)){
        fs.writeFileSync(DB_FILE, JSON.stringify([]));
    }
    let newUser = {
        id: generateId(),
        username,
        password
    }
    addUserDB(newUser);
    return true;
}

const addUserDB = (user) =>{
    let db = JSON.parse(fs.readFileSync(DB_FILE));
    db.push(user);
    fs.writeFileSync(DB_FILE, JSON.stringify(db, null, 2));
}

const generateId = ()=> crypto.randomBytes(16).toString('hex');

module.exports = {addUser};