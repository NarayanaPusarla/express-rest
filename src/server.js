var express = require('express')
var app = express()
let authRouter = require("../src/routes/auth");
let userRouter = require("../src/routes/user");
//const db = require("modules");
const db = require("./models");

app.use(express.json());
app.use('/auth', authRouter);
app.use('/user', userRouter);

// db.sequelize.sync()

db.sequelize.sync().then( () => {
    console.log("Sunc db")
}).catch((err) => {
    console.log("failed to sync" + err.message);
});

app.get('/', function(req, res){
    res.send('Hello World');
})

var server = app.listen(8081, function(){
    var host = server.address().address
    var port = server.address().port

    console.log("Server listen on %s %s",host,port)
})
