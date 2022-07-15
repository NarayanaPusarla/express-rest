const { verifyJWTToken } = require("../services/loginService");

module.exports = async function verifyAuth(req, res, next) {
    const token = req.header("authorization");

    const isTokenAlive = await verifyJWTToken(token);

    if(isTokenAlive === true) {

        next();
    } else {
        res.status(401).json({status : false, message : "auth token expires"});
    }
}
