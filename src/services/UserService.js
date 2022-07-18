const db = require("../models");
const bcrypt = require('bcryptjs');

const userService = {
    addUser : async (objData) => {
        const strSalt = await bcrypt.genSaltSync(10);
        const  userObject = {
            'first_name' : objData.first_name,
            'last_name' : objData.last_name,
            'email' : objData.email,
            'password' :  await bcrypt.hashSync(objData.password, strSalt), //objData.password,
            'salt' : strSalt
        };

        const objUser = await db.user.create(userObject);
        return { status : "success", message : "User created successfully", id : objUser.id};
    },
    getUser : async (p_nUserID) => {
        console.log(p_nUserID);
        if(p_nUserID) {
            const objUsers = await db.user.findOne({
                where : {
                    id : p_nUserID
                }
            });
            return { status : "success",  data : objUsers};
        } else {
            const objUsers = await db.user.findAll();
            return { status : "success",  data : objUsers};
        }
    },
    updateUser : async (p_nUserID, objData) => {
        console.log(p_nUserID, objData);
        const objUpdateObject = {
            "first_name" : objData.first_name,
            "last_name" : objData.last_name,
            "email" : objData.email
        };

        await db.user.update( objUpdateObject , {
            where :{
                id : p_nUserID
            }
        })
        return { status : "success", message : "user "+p_nUserID+" updated"};
    },
    deleteUser : async (p_nUserID) => {
        await db.user.destroy({
            where: {
                id : p_nUserID
            }
        });
        return { status : "success", message :"user "+p_nUserID+" deleted"};
    }
}

module.exports = userService;
