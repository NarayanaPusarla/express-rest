var express = require("express");
const login = require("../controllers/login");
var router = express.Router();

router.post('/login', async function(req, res, next){
    const resp = await login.doLogin(req);
    res.status(200).json(resp);
})

router.post('/signup', async function(req, res, next) {
    const resp = await login.signUp(req);
    res.status(200).json(resp);
})

module.exports = router;
