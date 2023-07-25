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


module.exports = {addUserDB, searchUserDB, removeUserDB};