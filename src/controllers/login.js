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
    },
    signUp: async (req, res) => {
        console.log(req.query.date_range);
        try {
            let resp = await loginService.signUp(req.body);
            if(resp.status) {
                return resp;
            } else {
                return {
                    status : resp.status,
                    message : "Email already exist."
                }
            }
        }catch(error) {
            return { status : "error", message : error.message}
        }
    }
}

module.exports= login
