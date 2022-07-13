const loginService = require("../services/loginService")

const login = {
    doLogin: async (req,res) => {
        try{
            let resp = await loginService.attemptLogin(req.body);
            return resp;
        } catch(error) {
            return { status : "error", message : error.message}
        }
    }
}

module.exports= login
