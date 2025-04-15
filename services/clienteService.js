const {sql, config} = require ('../config/db');

//Função para pesqisar clientes no banco de dados
async function pesqisarCliente() {
    const requisicaoAcessoDB = await sql.connect(config);
    const resultado = await requisicaoAcessoDB.request().query`SELECT * FROM Cliente`;
    return resultado.recordset
}

// nome_fantasia,razao_social,cnpj,segmento,telefone,site,id_usuario

async function cadastrarCliente(nome_fantasia, razao_social, cnpj, segmento, telefone, site, id_usuario) {
    const pool = await sql.connect(config);
    const resultado = await pool.request()
        .input('nome_fantasia', sql.VarChar, nome_fantasia)
        .input('razao_social', sql.VarChar, razao_social)
        .input('cnpj', sql.VarChar, cnpj)
        .input('segmento', sql.VarChar, segmento)
        .input('telefone', sql.VarChar, telefone)
        .input('site', sql.VarChar, site)
        .input('id_usuario', sql.Int, id_usuario)
        .query(`
            INSERT INTO Cliente (nome_fantasia, razao_social, cnpj, segmento, telefone, site, id_usuario)
            VALUES (@nome_fantasia, @razao_social, @cnpj, @segmento, @telefone, @site, @id_usuario)
        `);
    return resultado.rowsAffected[0] > 0;
}

//Função para deletar cliente no banco de dados por id_cliente ou nome_fantasia

async function deletarCliente(id_cliente, nome_fantasia) {
    const pool = await sql.connect(config);
    const resultado = await pool.request()
        .input('id_cliente', sql.Int, id_cliente)
        .input('nome_fantasia', sql.VarChar, nome_fantasia)
        .query(`
            DELETE FROM Cliente WHERE id_cliente = @id_cliente OR nome_fantasia = @nome_fantasia
        `);
    return resultado.rowsAffected[0] > 0;
}

//Função para atualizar cliente no banco de dados 
async function atualizarCliente(nome_fantasia, razao_social, cnpj, segmento, telefone, site) {
    const pool = await sql.connect(config);
    const resultado = await pool.request()
        .input('nome_fantasia', sql.VarChar, nome_fantasia)
        .input('razao_social', sql.VarChar, razao_social)
        .input('cnpj', sql.VarChar, cnpj)
        .input('segmento', sql.VarChar, segmento)
        .input('telefone', sql.VarChar, telefone)
        .input('site', sql.VarChar, site)
        .query(`
            UPDATE Cliente SET razao_social = @razao_social, cnpj = @cnpj, segmento = @segmento,
            telefone = @telefone, site = @site WHERE nome_fantasia = @nome_fantasia
        `);
    return resultado.rowsAffected[0] > 0;
}


module.exports = {atualizarCliente};
module.exports = {deletarCliente};
module.exports = {pesqisarCliente};
module.exports = {cadastrarCliente};