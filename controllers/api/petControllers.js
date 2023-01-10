const pet = require("../../db/models/pet")

class PetControllers {
        
   savePet(req, res){
    
     //   const newPet = new pet({
               
      //          imie: 'Jasiu',
       //         gatunek: 'Jasiu',
        //        plec: 'Jasiu',
        //        wiek: 'Jasiu',
        //        wielkosc: 'Jasiu',
         //       miasto: 'Jasiu',
         //       stan: 'Jasiu'
       // });
       // newPet.save().then(()=>{
       //         console.log('zwierze zapisane')
      //  });

      const imie  = req.body.imie;
      const gatunek  = req.body.gatunek;
      const plec  = req.body.plec;
      const wiek = req.body.wiek;
      const wielkosc  = req.body.wielkosc;
      const miasto  = req.body.miasto;
      const stan  = req.body.stan;


        res.send('Strona głóna działa!');
    
}
getAllPets(req, res){
        res.send('API Działa');
}
getPet(req, res){
        res.send('.info o petcie');
}
savePet(req, res){
        res.send('.pet zapisany.');
}
updatePet(req, res){
        res.send('.pet zaktualizowany.');
}
deletePet(req, res){
        const id  = req.params.id;
        res.send('.pet usunięty.' + id );
}

}
module.exports = new PetControllers();