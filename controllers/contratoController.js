const contratoService = require('../services/contratoService');

async function cadastrarNovoContrato(req, res) {
    const { nome_arquivo, caminho_arquivo, data_envio, status_contrato, data_inicio, data_termino } = req.body;

    if (!nome_arquivo || !caminho_arquivo || !data_envio || !status_contrato || !data_inicio || !data_termino) {
        return res.status(400).json({ mensagem: 'Preencha todos os campos.' });
    }

    try {
        const sucesso = await contratoService.cadastrarContrato(nome_arquivo, caminho_arquivo, data_envio, status_contrato, data_inicio, data_termino);

        if (sucesso) {
            res.status(201).json({ mensagem: 'Contrato cadastrado com sucesso!' });
        } else {
            res.status(500).json({ mensagem: 'Não foi possível cadastrar o contrato.' });
        }
    } catch (erro) {
        console.error('Erro ao cadastrar contrato:', erro);
        res.status(500).json({ mensagem: 'Erro interno no servidor.' });
    }
}

module.exports = { cadastrarNovoContrato };

