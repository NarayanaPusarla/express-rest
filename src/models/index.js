const sequelize = require('sequelize');
const Sequelize = require('sequelize');
const dbConfigs = require("../configs/db_config");

const dbConnect = new Sequelize(dbConfigs.DB, dbConfigs.USER, dbConfigs.PASSWORD, {
    host : dbConfigs.host ,
    port : dbConfigs.port,
    dialect : dbConfigs.dialect
});

const testConnect = async()=> {
    try {
        await dbConnect.authenticate();
        console.log("connected successfully");
    } catch(error) {
        console.log("connection failed" , error);
    }
}
//testConnect();

const db = {};
db.Sequelize = Sequelize;
db.sequelize = dbConnect;

//load models
db.user = require("./User.js")(dbConnect, Sequelize)
module.exports = db;
