const { Model, DataTypes} = require('sequelize');
const dbConnect = require("./index");

class User extends Model {}
User.init({
    first_name : {
        type : DataTypes.string,
        allowNull : false
    },
    last_name : {
        type : DataTypes.string,
        allowNull : false
    },
}, {
    dbConnect,
    modelName : 'User'
})
