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
    },
    verifyJWTToken :async (p_strToken) => {
        let isTokenValid = false;
        try{
            JWTPayload = await jwt.verify(p_strToken, 'secretKey');
            if(JWTPayload.email != '') {
                isTokenValid = true;
            }
        } catch(error) {
            isTokenValid = false;
        }
        
        return isTokenValid;
    } 
}

module.exports = loginService;
