module.exports = (sequlize, Sequlize) => {
    const User = sequlize.define("user", {
        first_name : {
            type : Sequlize.STRING
        },
        last_name : {
            type : Sequlize.STRING
        },
        email : {
            type : Sequlize.STRING
        }
    },{
        tableName : 'users'
    });
    return User;
}
