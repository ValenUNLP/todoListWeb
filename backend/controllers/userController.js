const {removeUser} = require("../services/userServices");


const deleteUser = (req, res) => {
    const id = req.params.id;

    const removed = removeUser(id);

    if(removed.error){
        res.status(404).send(removed.message);
    }else{
        res.status(200).send("User deletion successful")
    }
}


module.exports = {deleteUser};