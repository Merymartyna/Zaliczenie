const pet = require("../../../db/models/pet");


class PetControllers {

   async savePet(req, res){

        const imie  = req.body.imie;
        const gatunek  = req.body.gatunek;
        const plec  = req.body.plec;
        const wiek = req.body.wiek;
        const wielkosc  = req.body.wielkosc;
        const miasto  = req.body.miasto;
        const stan  = req.body.stan;

        let Pet;
        try{
                Pet = new pet({imie, gatunek, plec, wiek, wielkosc, miasto, stan});
                await Pet.save();
        }catch (err) {
                return res.status(422).json({ message: err.message });
              }


       // res.send('Zwierzak został dodany! Informacje: ' + imie + gatunek+ plec+ wiek +wielkosc + miasto + stan);
       res.status(201).json(Pet);
    
}
async getAllPets(req, res){
        let doc;
        try{
        doc = await pet.find({});
        }catch(err){
                return res.status(500, json({error:err.message}));
        }
                console.log(doc);
                res.status(200).json(doc);
        }
        
        

async getPet(req, res){
        const id =req.params.id;
        const Pet = await pet.findOne({_id:id});
        res.status(200).json(Pet);
}

async updatePet(req, res){
        const id = req.params.id;
        const imie  = req.body.imie;
        const gatunek  = req.body.gatunek;
        const plec  = req.body.plec;
        const wiek = req.body.wiek;
        const wielkosc  = req.body.wielkosc;
        const miasto  = req.body.miasto;
        const stan  = req.body.stan;

    
        const Pet = await pet.findOne({_id: id});
        Pet.imie = imie;
        Pet.gatunek = gatunek;
        Pet.plec = plec;
        Pet.wiek = wiek;
        Pet.wielkosc = wielkosc;
        Pet.miasto = miasto;
        Pet.stan = stan;
        await Pet.save();
        res.status(201).json(Pet);
}
async deletePet(req, res){
        const id  = req.params.id;
        await pet.deleteOne({_id: id});

        res.sendStatus(204);
}

}
module.exports = new PetControllers();