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

module.exports = {pesqisarCliente};
module.exports = {cadastrarCliente};