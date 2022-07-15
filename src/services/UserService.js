const userService = {
    addUser : (objData) => {
        
        return { status : "success", message : { data : "welcome to new system "+ objData.name}};
    },
    getUser : (objData) => {
        return { status : "success", message : { data : "get users "}};
    },
    updateUser : (objData) => {
        return { status : "success", message : { data : "update user "}};
    },
    deleteUser : (objData) => {
        return { status : "success", message : { data : "delete user "}};
    }
}

module.exports = userService;
