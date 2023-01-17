const express = require("express");
const app = express();
const apiRouter = require('./app/routes/api');
const{port} = require('./config');
const bodyParser = require('body-parser');
const cors = require('cors');


require('./db/mongoose');

app.use(bodyParser.json());
app.use(cors());
app.use('/api/', apiRouter);


app.listen(port, function(){
    console.log('serwer słucha...');
});