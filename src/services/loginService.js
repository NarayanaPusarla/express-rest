const loginService = {
    attemptLogin : (objData) => {
        
        return { status : "success", message : { data : "welcome to new system "+ objData.name}};
    }
}

module.exports = loginService;
