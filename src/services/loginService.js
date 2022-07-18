const { user } = require("../models");
const bcrypt = require("bcryptjs");
const jwt = require('jsonwebtoken');
const userService = require("./UserService");

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
    },
    signUp :async (objData) => {
        console.log(objData);
        const objUser = await user.findOne({
            where : {
                'email' : objData.email
            }
        });

        if(objUser != null) {
            return {
                status : false
            };
        } else {

            const objResponse = await userService.addUser({
                'first_name' : objData.first_name,
                'last_name' : objData.last_name,
                'email' : objData.email,
                'password' : objData.password
            });
            console.log(objResponse);
            if(objResponse.id > 0) {
                return {
                    status : "success",
                    message : "User created successfully"
                };
            } else {
                return {
                    status : false
                };
            }
        }
    }
}

module.exports = loginService;
