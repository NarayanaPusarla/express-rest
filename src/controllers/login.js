const loginService = require("../services/loginService")

const login = {
    doLogin: async (req,res) => {
        try{
            let resp = await loginService.attemptLogin(req.body);
            console.log("return");
            if(resp) {
                return {
                    status : "success"
                }
            } else {
                return {
                    status : 'success',
                    message : "invalid password"
                }
            }
        } catch(error) {
            return { status : "error", message : error}
        }
    }
}

module.exports= login
