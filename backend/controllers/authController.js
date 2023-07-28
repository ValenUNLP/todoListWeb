const {addUser, login} = require("../services/authServices");


const loginUser = (req, res) =>{
    const username = req.body.username;
    const password = req.body.password;

    const loged = login(username, password);

    if(loged.error){
        res.status(401).send(loged.message);
    }else{
        res.status(200).send(loged);
    }
}

const registerUser = (req, res) =>{
    const name = req.body.name;
    const username = req.body.username;
    const password = req.body.password;

    const user =  addUser(username, password, name);

    if(user.error){
        res.status(400).send(user.message);
    }else{
        res.status(200).send(user);
    }
}

module.exports = {registerUser, loginUser}