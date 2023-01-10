const express = require("express");
const app = express();
const apiRouter = require('./routes/api');
const{port} = require('./config');
const bodyParser = require('body-parser');


require('./db/mongoose');

app.use(bodyParser.json());

app.use('/api/', apiRouter);


app.listen(port, function(){
    console.log('serwer słucha...');
});