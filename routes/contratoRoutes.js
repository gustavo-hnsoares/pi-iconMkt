const express = require('express');
const router = express.Router();
const contratoController = require('../controllers/contratoController');

// Rutas para los contratos
router.post('/contrato', contratoController.cadastrarNovoContrato);
router.delete('/contrato', contratoController.deletarContrato);
router.get('/contrato', contratoController.pesquisarContrato);
router.put('/contrato', contratoController.atualizarContrato);

module.exports = router;