const express = require('express');
const router = express.Router();
const clienteController = require('../controllers/clienteController')

/* Defina a rota para obter dados */

router.get('/clientes', clienteController.getDadosCliente);

module.exports = router;
