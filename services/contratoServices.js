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

//Função para deletar contrato no banco de dados por id_cliente ou nome_arquivo
async function deletarContrato(id_contrato, nome_arquivo) {
    const pool = await sql.connect(config);
    const resultado = await pool.request()
        .input('id_contrato', sql.Int, id_contrato)
        .input('nome_arquivo', sql.VarChar, nome_arquivo)
        .query(`DELETE FROM Contrato WHERE id_contrato = @id_contrato OR nome_arquivo = @nome_arquivo`);
    return resultado.rowsAffected[0] > 0;
}

//Função para pesquisar contrato no banco de dados
async function pesquisarContrato() {
    const requisicaoAcessoDB = await sql.connect(config);
    const resultado = await requisicaoAcessoDB.request().query`SELECT * FROM Contrato`;
    return resultado.recordset
}

//Função para atualizar contrato no banco de dados

async function atualizarContrato(nome_arquivo, caminho_arquivo, data_envio, status_contrato, data_inicio, data_termino) {
    const pool = await sql.connect(config);
    const resultado = await pool.request()
        .input('nome_arquivo', sql.VarChar, nome_arquivo)
        .input('caminho_arquivo', sql.VarChar, caminho_arquivo)
        .input('data_envio', sql.Date, data_envio)
        .input('status_contrato', sql.VarChar, status_contrato)
        .input('data_inicio', sql.Date, data_inicio)
        .input('data_termino', sql.Date, data_termino)
        .query(`UPDATE Contrato SET nome_arquivo = @nome_arquivo, caminho_arquivo = @caminho_arquivo, data_envio = @data_envio, status_contrato = @status_contrato, data_inicio = @data_inicio, data_termino = @data_termino WHERE nome_arquivo = @nome_arquivo`);
    return resultado.rowsAffected[0] > 0;
}


module.exports = { atualizarContrato };
module.exports = { pesquisarContrato };
module.exports = { deletarContrato };
module.exports = { cadastrarContrato };