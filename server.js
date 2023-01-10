const express = require('express');
const app = express();
const apiRouter = require('./routes/api');

app.use('/', apiRouter);

const port=3001;

app.listen(port, function(){
    console.log('serwer słucha...');
});