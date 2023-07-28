const {removeUser, searchUser} = require("../services/userServices");


const deleteUser = (req, res) => {
    const id = req.params.id;

    const removed = removeUser(id);

    if(removed.error){
        res.status(404).send(removed.message);
    }else{
        res.status(200).send("User deletion successful")
    }
}

const getUser = (req, res) => {
    const username = req.params.username;

    const finded = searchUser(username);

    if(finded.error){
        res.status(404).send(finded.error);
    }{
        res.status(200).send(finded);
    }
}


module.exports = {deleteUser, getUser};