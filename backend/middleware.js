const jwt = require("jsonwebtoken");

const authenticateJWT = (req, res, next) =>{

    const authorization = req.headers.authorization;

    if(!authorization) res.status(401).send("Please, send authorization");

    const config = authorization.split(" ")[0];
    const token = authorization.split(" ")[1];

    if(config !== "Bearer") res.status(401).send("Format invalid");
    
    try{
        const payload = jwt.verify(token, "valen");
        console.log(payload)
        next();
    }catch{
        res.status(401).send("Invalid token");
    }

}

module.exports = {authenticateJWT};