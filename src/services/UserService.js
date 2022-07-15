const db = require("../models");

const userService = {
    addUser : async (objData) => {
        const  userObject = {
            'first_name' : objData.first_name,
            'last_name' : objData.last_name,
            'email' : objData.email
        };

        const objUser = await db.user.create(userObject);
        return { status : "success", message : { data : "User created successfully with id : " + objUser.id}};
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
    updateUser : (p_nUserID, objData) => {
        return { status : "success", message : { data : "update user "}};
    },
    deleteUser : (p_nUserID) => {
        return { status : "success", message : { data : "delete user "}};
    }
}

module.exports = userService;
