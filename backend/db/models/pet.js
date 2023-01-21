const mongoose = require("mongoose");

// Tworzę schemat
const petSchema = mongoose.Schema({
    
    imie: {type:String, required:true,},
    gatunek: String,
    plec: String,
    wiek: String,
    wielkosc: String,
    miasto: String,
    stan: {type:String, required:true,}
})
module.exports = mongoose.model("Pet", petSchema);