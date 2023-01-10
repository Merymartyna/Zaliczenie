const express = require('express');
const router = express.Router();

const petActions = require('../controllers/api/pets');
router.get('/', petActions.savePet);


module.exports = router;