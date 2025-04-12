const express = require('express');
const router = express.Router();
const nivelController = require('../controllers/nivelController');

router.post('/nivel', nivelController.cadastrarNovoNivel);

module.exports = router;