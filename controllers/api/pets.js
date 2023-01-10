const pet = require("../../db/models/pet")

module.exports = {
   savePet(req, res){
    
        const newPet = new pet({
               
                imie: 'Jasiu',
                gatunek: 'Jasiu',
                plec: 'Jasiu',
                wiek: 'Jasiu',
                wielkosc: 'Jasiu',
                miasto: 'Jasiu',
                stan: 'Jasiu'
        });
        newPet.save().then(()=>{
                console.log('zwierze zapisane')
        });
    
}
}