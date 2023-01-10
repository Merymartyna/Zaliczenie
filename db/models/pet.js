const mongoose = require("mongoose");

// Tworzę schemat
const petSchema = mongoose.Schema({
    
    imie: String,
    gatunek: String,
    plec: String,
    wiek: String,
    wielkosc: String,
    miasto: String,
    stan: String
})
module.exports = mongoose.model("Pet", petSchema);