//const loginService = require("../services/loginService")
const userService = require("../services/UserService");

const user = {
    addUser: async (req,res) => {
        try{
            let resp = await userService.addUser(req.body);

            return resp;
        } catch(error) {
            return { status : "error", message : error.message}
        }
    },
    getUser : async(req, res) => {
        try{
            let resp = await userService.getUser(req.params.id);

            return resp;
        } catch(error) {
            return { status : "error", message : error.message}
        }
    },
    updateUser : async(req, res) => {
        try{
            let resp = await userService.updateUser(req.params.id, req.body);

            return resp;
        } catch(error) {
            return { status : "error", message : error.message}
        }
    },
    deleteUser : async (req, res) => {
        try{
            let resp = await userService.deleteUser(req.params.id);

            return resp;
        } catch(error) {
            return { status : "error", message : error.message}
        }
    }
}

module.exports= user
