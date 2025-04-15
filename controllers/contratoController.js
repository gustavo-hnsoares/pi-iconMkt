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

//Função para deletar contrato no banco de dados
async function deletarContrato(req, res) {
    const { id_contrato: id_cliente, nome_arquivo } = req.params;

    if (!id_cliente && !nome_arquivo) {
        return res.status(400).json({ mensagem: 'ID do contrato ou nome do arquivo não fornecido.' });
    }

    try {
        const sucesso = await contratoService.deletarContrato(id_cliente, nome_arquivo);

        if (sucesso) {
            res.status(200).json({ mensagem: 'Contrato deletado com sucesso!' });
        } else {
            res.status(500).json({ mensagem: 'Não foi possível deletar o contrato.' });
        }
    } catch (erro) {
        console.error('Erro ao deletar contrato:', erro);
        res.status(500).json({ mensagem: 'Erro interno no servidor.' });
    }
}

//Função para pesquisar contrato no banco de dados
async function pesquisarContrato(req, res) {
    try {
        const contratos = await contratoService.pesquisarContrato();
        res.status(200).json(contratos);
    } catch (erro) {
        console.error('Erro ao pesquisar contratos:', erro);
        res.status(500).json({ mensagem: 'Erro interno no servidor.' });
    }
}

//Função para atualizar contrato no banco de dados
async function atualizarContrato(req, res) {
    const { nome_arquivo, caminho_arquivo, data_envio, status_contrato, data_inicio, data_termino } = req.body;

    if (!nome_arquivo || !caminho_arquivo || !data_envio || !status_contrato || !data_inicio || !data_termino) {
        return res.status(400).json({ mensagem: 'Preencha todos os campos.' });
    }

    try {
        const sucesso = await contratoService.atualizarContrato(nome_arquivo, caminho_arquivo, data_envio, status_contrato, data_inicio, data_termino);

        if (sucesso) {
            res.status(200).json({ mensagem: 'Contrato atualizado com sucesso!' });
        } else {
            res.status(500).json({ mensagem: 'Não foi possível atualizar o contrato.' });
        }
    } catch (erro) {
        console.error('Erro ao atualizar contrato:', erro);
        res.status(500).json({ mensagem: 'Erro interno no servidor.' });
    }
}

module.exports = { atualizarContrato };
module.exports = { pesquisarContrato };
module.exports = { deletarContrato };
module.exports = { cadastrarNovoContrato };

