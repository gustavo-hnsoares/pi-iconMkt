const express = require('express');
const router = express.Router();
const usuarioController = require('../controllers/usuarioController');

router.post('/usuarios', usuarioController.cadastrarNovoUsuario);
router.delete('/usuarios', usuarioController.deletarUsuario);
router.put('/usuarios', usuarioController.atualizarUsuario);
router.get('/usuarios', usuarioController.pesquisarUsuario);

module.exports = router;