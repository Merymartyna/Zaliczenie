const express = require('express');
const router = express.Router();

const petControllers = require('../controllers/api/petControllers');
//pobieranie zwierząt
router.get('/pets', petControllers.getAllPets)
//pobieranie zwierzaka
router.get('/pets/:id', petControllers.getPet)
//zapisywanie zwierzaka
router.post('/pets', petControllers.savePet)
//edytowanie zwierzątka
router.put('/pets/:id', petControllers.updatePet)
//usuwanie zwierzątka

router.delete('/pets/:id', petControllers.deletePet)


module.exports = router;