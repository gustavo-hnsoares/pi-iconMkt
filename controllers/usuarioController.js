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

module.exports = { cadastrarNovoUsuario };