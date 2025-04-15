const usuarioService = require('../services/usuarioService');

async function cadastrarNovoUsuario(req, res) {
    const { nome, email, senha } = req.body;

    if (!nome || !email || !senha) {
        return res.status(400).json({ mensagem: 'Preencha todos os campos.' });
    }

    try {
        const sucesso = await usuarioService.cadastrarUsuario(nome, email, senha);

        if (sucesso) {
            res.status(201).json({ mensagem: 'Usuário cadastrado com sucesso!' });
        } else {
            res.status(500).json({ mensagem: 'Não foi possível cadastrar o usuário.' });
        }
    } catch (erro) {
        console.error('Erro ao cadastrar usuário:', erro);
        res.status(500).json({ mensagem: 'Erro interno no servidor.' });
    }
}

// Função para deletar usuario no banco de dados por nome
async function deletarUsuario(req, res) {
    const { nome } = req.body;

    if (!nome) {
        return res.status(400).json({ mensagem: 'Preencha o campo nome.' });
    }

    try {
        const sucesso = await usuarioService.deletarUsuario(nome);

        if (sucesso) {
            res.status(200).json({ mensagem: 'Usuário deletado com sucesso!' });
        } else {
            res.status(500).json({ mensagem: 'Não foi possível deletar o usuário.' });
        }
    } catch (erro) {
        console.error('Erro ao deletar usuário:', erro);
        res.status(500).json({ mensagem: 'Erro interno no servidor.' });
    }
}

// Função para atualizar usuario no banco de dados
async function atualizarUsuario(req, res) {
    const { nome, email, senha, id_nivel } = req.body;

    if (!nome || !email || !senha || !id_nivel) {
        return res.status(400).json({ mensagem: 'Preencha todos os campos.' });
    }

    try {
        const sucesso = await usuarioService.atualizarUsuario(nome, email, senha, id_nivel);

        if (sucesso) {
            res.status(200).json({ mensagem: 'Usuário atualizado com sucesso!' });
        } else {
            res.status(500).json({ mensagem: 'Não foi possível atualizar o usuário.' });
        }
    } catch (erro) {
        console.error('Erro ao atualizar usuário:', erro);
        res.status(500).json({ mensagem: 'Erro interno no servidor.' });
    }
}
// Função para pesquisar usuario no banco de dados
async function pesquisarUsuario(req, res) {
    try {
        const usuarios = await usuarioService.pesquisarUsuario();
        res.status(200).json(usuarios);
    } catch (erro) {
        console.error('Erro ao pesquisar usuários:', erro);
        res.status(500).json({ mensagem: 'Erro interno no servidor.' });
    }
}

module.exports = { pesquisarUsuario };
module.exports = { atualizarUsuario };
module.exports = { deletarUsuario };
module.exports = { cadastrarNovoUsuario };