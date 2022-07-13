var express = require('express')
var app = express()
let authRouter = require("../src/routes/auth");

app.use(express.json());
app.use('/auth', authRouter);

app.get('/', function(req, res){
    res.send('Hello World');
})

var server = app.listen(8081, function(){
    var host = server.address().address
    var port = server.address().port

    console.log("Server listen on %s %s",host,port)
})
