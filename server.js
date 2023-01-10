const express = require("express");
const app = express();
const apiRouter = require('./routes/api');
const{port} = require('./config');


require('./db/mongoose');
app.use('/', apiRouter);


app.listen(port, function(){
    console.log('serwer słucha...');
});