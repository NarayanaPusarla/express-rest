var express = require("express");
const user = require("../controllers/user");
var router = express.Router();

router.get('/', async function(req,res,next) {
    const resp = await user.getUser(req);
    res.status(200).json(resp);
})
router.post('/', async function(req, res, next){
    const resp = await user.addUser(req);
    res.status(200).json(resp);
})

router.put('/',async function(req, res, next) {
    const resp = await user.updateUser(req);
    res.status(200).json(resp);
})

router.delete('/',async function(req, res, next){
    const resp = await user.deleteUser(req);
    res.status(200).json(resp);
})

module.exports = router;
