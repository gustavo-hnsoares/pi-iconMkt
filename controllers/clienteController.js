const clienteService = require('../services/clienteService');

/*Após executar a query SQL por meio do script clienteService.js, os dados dos clientes que estejam cadastrados no banco de dados. Assim, para que seja possível visualizá-los, serão retornados no formato json*/

async function getDadosCliente(req, resposta) {
    const clientes = await clienteService.pesqisarCliente();
    resposta.json(clientes);
}

//Função para cadastrar cliente no banco de dados
async function cadastrarNovoCliente(req, res) {
    const { nome_fantasia, razao_social, cnpj, segmento, telefone, site, id_usuario } = req.body;

    if (!nome_fantasia || !razao_social || !cnpj || !segmento || !telefone || !site || !id_usuario) {
        return res.status(400).json({ mensagem: 'Preencha todos os campos.' });
    }

    try {
        const sucesso = await clienteService.cadastrarCliente(nome_fantasia, razao_social, cnpj, segmento, telefone, site, id_usuario);

        if (sucesso) {
            res.status(201).json({ mensagem: 'Cliente cadastrado com sucesso!' });
        } else {
            res.status(500).json({ mensagem: 'Não foi possível cadastrar o cliente.' });
        }
    } catch (erro) {
        console.error('Erro ao cadastrar cliente:', erro);
        res.status(500).json({ mensagem: 'Erro interno no servidor.' });
    }
}

//Função para deletar cliente no banco de dados id_cliente ou nome_fantasia

async function deletarCliente(req, res) {
    const { id_cliente, nome_fantasia } = req.body;

    if (!id_cliente && !nome_fantasia) {
        return res.status(400).json({ mensagem: 'Preencha o campo id_cliente ou nome_fantasia.' });
    }

    try {
        const sucesso = await clienteService.deletarCliente(id_cliente, nome_fantasia);

        if (sucesso) {
            res.status(200).json({ mensagem: 'Cliente deletado com sucesso!' });
        } else {
            res.status(500).json({ mensagem: 'Não foi possível deletar o cliente.' });
        }
    } catch (erro) {
        console.error('Erro ao deletar cliente:', erro);
        res.status(500).json({ mensagem: 'Erro interno no servidor.' });
    }
}

//Função para atualizar cliente no banco de dados 

async function atualizarCliente(req, res) {
    const { nome_fantasia, razao_social, cnpj, segmento, telefone, site } = req.body;

    if (!nome_fantasia || !razao_social || !cnpj || !segmento || !telefone || !site) {
        return res.status(400).json({ mensagem: 'Preencha todos os campos.' });
    }

    try {
        const sucesso = await clienteService.atualizarCliente(nome_fantasia, razao_social, cnpj, segmento, telefone, site);

        if (sucesso) {
            res.status(200).json({ mensagem: 'Cliente atualizado com sucesso!' });
        } else {
            res.status(500).json({ mensagem: 'Não foi possível atualizar o cliente.' });
        }
    } catch (erro) {
        console.error('Erro ao atualizar cliente:', erro);
        res.status(500).json({ mensagem: 'Erro interno no servidor.' });
    }
}

module.exports = { atualizarCliente };
module.exports = { deletarCliente };
module.exports = { getDadosCliente };
module.exports = { cadastrarNovoCliente };