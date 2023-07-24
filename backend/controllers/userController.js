const { addUser } = require("../functions/userFunctions");

const registerUser = (req, res) =>{
    const username = req.body.username;
    const password = req.body.password;

    const validateExistence =  addUser(username, password);

    res.send(validateExistence);

}

module.exports = {registerUser};