var express = require("express");
const user = require("../controllers/user");
var router = express.Router();

router.get('/:id?', async function(req,res,next) {
    const resp = await user.getUser(req);
    res.status(200).json(resp);
})
router.post('/', async function(req, res, next){
    const resp = await user.addUser(req);
    res.status(200).json(resp);
})

router.put('/:id',async function(req, res, next) {
    const resp = await user.updateUser(req);
    res.status(200).json(resp);
})

router.delete('/:id?',async function(req, res, next){
    const resp = await user.deleteUser(req);
    res.status(200).json(resp);
})

module.exports = router;
