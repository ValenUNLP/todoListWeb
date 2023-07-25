const { addUser, removeUser} = require("../services/userServices");

const registerUser = (req, res) =>{
    const username = req.body.username;
    const password = req.body.password;

    const user =  addUser(username, password);

    if(user.error){
        res.status(400).send(user.message);
    }else{
        res.status(200).send(user);
    }
}


const deleteUser = (req, res) => {
    const id = req.params.id;

    const removed = removeUser(id);

    if(removed.error){
        res.status(404).send(removed.message);
    }else{
        res.status(200).send("User deletion successful")
    }
}

module.exports = {registerUser, deleteUser};