const express = require('express');
const router = express.Router();
const nivelController = require('../controllers/nivelController');

router.post('/nivel', nivelController.cadastrarNovoNivel);
router.delete('/nivel', nivelController.deletarNivel);
router.put('/nivel', nivelController.atualizarNivel);
router.get('/nivel', nivelController.pesquisarNivel);

module.exports = router;