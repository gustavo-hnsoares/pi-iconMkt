const { sql, config } = require('../config/db');

async function cadastrarContrato(nome_arquivo,caminho_arquivo,data_envio,status_contrato,data_inicio,data_termino,id_cliente) {
    const pool = await sql.connect(config);
    const resultado = await pool.request()
        .input('nome_arquivo', sql.VarChar, nome_arquivo)
        .input('caminho_arquivo', sql.VarChar, caminho_arquivo)
        .input('data_envio', sql.Date, data_envio)
        .input('status_contrato', sql.VarChar, status_contrato)
        .input('data_inicio', sql.Date, data_inicio)
        .input('data_termino', sql.Date, data_termino)
        .input('id_cliente', sql.Int, id_cliente)
        .query(`INSERT INTO Contrato (nome_arquivo, caminho_arquivo, data_envio, status_contrato, data_inicio, data_termino, id_cliente) VALUES (@nome_arquivo, @caminho_arquivo, @data_envio, @status_contrato, @data_inicio, @data_termino, @id_cliente)`);
    return resultado.rowsAffected[0] > 0;
}

module.exports = { cadastrarContrato };