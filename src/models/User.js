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
        },
        password : {
            type : Sequlize.STRING,
            allowNull : false
        },
        salt : {
            type : Sequlize.STRING,
            allowNull : false
        }
    },{
        tableName : 'users'
    });
    return User;
}
