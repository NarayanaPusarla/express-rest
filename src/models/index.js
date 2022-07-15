const sequelize = require('sequelize');
const Sequelize = require('sequelize');
const dbConfigs = require("../configs/db_config");

const dbConnect = new Sequelize(dbConfigs.DB, dbConfigs.USER, dbConfigs.PASSWORD, {
    host : dbConfigs.host ,
    dialect : dbConfigs.dialect
});

const testConnect = async()=> {
    try {
        await dbConnect.authenticate();
        console.log("connectd successfully");
    } catch(error) {
        console.log("connection failed" , error);
    }
}
//testConnect();

const db = {};
db.Sequelize = Sequelize;
db.sequelize = dbConnect;

db.user = require("./User.js")(dbConnect, Sequelize)
module.exports = db;
