const { user } = require("../models");
const bcrypt = require("bcryptjs");

const loginService = {
    attemptLogin : async (objData) => {
        
        const objUser = await user.findOne({
            where : {
                'email' : objData.email
            }
        });
        
        if(objUser.password != 'null' && objUser.password != null && objUser.password != '' ) {
            return await bcrypt.compareSync(objData.password, objUser.password);
        } else {
            return false;
        }
    }
}

module.exports = loginService;
