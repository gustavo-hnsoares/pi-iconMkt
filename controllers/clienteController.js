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


module.exports = { getDadosCliente };
module.exports = { cadastrarNovoCliente };