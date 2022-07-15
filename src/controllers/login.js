const loginService = require("../services/loginService")

const login = {
    doLogin: async (req,res) => {
        try{
            let resp = await loginService.attemptLogin(req.body);
            if(resp.status) {
                return resp;
            } else {
                return {
                    status : resp.status,
                    message : "invalid password"
                }
            }
        } catch(error) {
            return { status : "error", message : error}
        }
    }
}

module.exports= login
