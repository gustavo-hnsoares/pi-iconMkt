const express = require('express');
const router = express.Router();
const contratoController = require('../controllers/contratoController');

// Rutas para los contratos
router.post('/contrato', contratoController.cadastrarNovoContrato);

module.exports = router;