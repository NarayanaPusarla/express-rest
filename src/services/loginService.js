const { user } = require("../models");
const bcrypt = require("bcryptjs");
const jwt = require('jsonwebtoken');

const loginService = {
    attemptLogin : async (objData) => {
        
        const objUser = await user.findOne({
            where : {
                'email' : objData.email
            }
        });
        
        if(objUser.password != 'null' && objUser.password != null && objUser.password != '' ) {
            const isMatched = await bcrypt.compareSync(objData.password, objUser.password);

            if(isMatched) {
                const JWTtoken = await jwt.sign({ email : objData.email}, 'secretKey',{ expiresIn: '1h' });

                return {
                    status : true,
                    token : JWTtoken
                }
            } else {
                return {
                    status : false
                };
            }
        } else {
            return {
                status : false
            };
        }
    }
}

module.exports = loginService;
