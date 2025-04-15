const nivelService = require('../services/nivelService');

async function cadastrarNovoNivel(req, res) {
    const { nome_nivel, descricao } = req.body;

    if (!nome_nivel || !descricao) {
        return res.status(400).json({ mensagem: 'Preencha todos os campos.' });
    }

    try {
        const sucesso = await nivelService.cadastrarNivel(nome_nivel, descricao);

        if (sucesso) {
            res.status(201).json({ mensagem: 'Nível cadastrado com sucesso!' });
        } else {
            res.status(500).json({ mensagem: 'Não foi possível cadastrar o nível.' });
        }
    } catch (erro) {
        console.error('Erro ao cadastrar nível:', erro);
        res.status(500).json({ mensagem: 'Erro interno no servidor.' });
    }
}

//Função para deletar nivel no banco de dados por nome

async function deletarNivel(req, res) {
    const { nome_nivel } = req.params;

    if (!nome_nivel) {
        return res.status(400).json({ mensagem: 'Nome do nível não fornecido.' });
    }

    try {
        const sucesso = await nivelService.deletarNivel(nome_nivel);

        if (sucesso) {
            res.status(200).json({ mensagem: 'Nível deletado com sucesso!' });
        } else {
            res.status(500).json({ mensagem: 'Não foi possível deletar o nível.' });
        }
    } catch (erro) {
        console.error('Erro ao deletar nível:', erro);
        res.status(500).json({ mensagem: 'Erro interno no servidor.' });
    }
}

//Função para atualizar nivel no banco de dados
async function atualizarNivel(req, res) {
    const { nome_nivel, descricao } = req.body;

    if (!nome_nivel || !descricao) {
        return res.status(400).json({ mensagem: 'Preencha todos os campos.' });
    }

    try {
        const sucesso = await nivelService.atualizarNivel(nome_nivel, descricao);

        if (sucesso) {
            res.status(200).json({ mensagem: 'Nível atualizado com sucesso!' });
        } else {
            res.status(500).json({ mensagem: 'Não foi possível atualizar o nível.' });
        }
    } catch (erro) {
        console.error('Erro ao atualizar nível:', erro);
        res.status(500).json({ mensagem: 'Erro interno no servidor.' });
    }
}

//Função para pesquisar nivel no banco de dados
async function pesquisarNivel(req, res) {
    try {
        const niveis = await nivelService.pesquisarNivel();
        res.status(200).json(niveis);
    } catch (erro) {
        console.error('Erro ao pesquisar níveis:', erro);
        res.status(500).json({ mensagem: 'Erro interno no servidor.' });
    }
}

module.exports = { atualizarNivel };
module.exports = { pesquisarNivel };
module.exports = { deletarNivel };
module.exports = { cadastrarNovoNivel };