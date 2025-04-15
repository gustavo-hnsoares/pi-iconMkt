const express = require('express');
const router = express.Router();
const clienteController = require('../controllers/clienteController')

/* Defina a rota para obter dados */

router.get('/clientes', clienteController.getDadosCliente);
router.post('/clientes', clienteController.cadastrarNovoCliente);
router.delete('/clientes', clienteController.deletarCliente);
router.put('/clientes', clienteController.atualizarCliente);


module.exports = router;