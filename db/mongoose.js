const mongoose = require('mongoose');
const{database} = require('../config');
mongoose.set('strictQuery',false);
mongoose.connect(database, () =>{
    console.log("Connected to MongoDB");
});