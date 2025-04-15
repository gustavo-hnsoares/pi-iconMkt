const { sql, config } = require('../config/db');

async function cadastrarNivel(nome) {
    const pool = await sql.connect(config);
    const resultado = await pool.request()
        .input('nome', sql.VarChar, nome)
        .query(`INSERT INTO nivelAcesso (nome) VALUES (@nome)`);
    return resultado.rowsAffected[0] > 0;

}

//Função para deletar nivel no banco de dados por nome
async function deletarNivel(nome) {
    const pool = await sql.connect(config);
    const resultado = await pool.request()
        .input('nome', sql.VarChar, nome)
        .query(`DELETE FROM nivelAcesso WHERE nome = @nome`);
    return resultado.rowsAffected[0] > 0;
}

//Função para atualizar nivel no banco de dados nome
async function atualizarNivel(nome) {
    const pool = await sql.connect(config);
    const resultado = await pool.request()
        .input('nome', sql.VarChar, nome)
        .query(`UPDATE nivelAcesso SET nome = @nome WHERE nome = @nome`);
    return resultado.rowsAffected[0] > 0;
}

//Função para pesquisar nivel no banco de dados
async function pesquisarNivel() {
    const requisicaoAcessoDB = await sql.connect(config);
    const resultado = await requisicaoAcessoDB.request().query`SELECT * FROM nivelAcesso`;
    return resultado.recordset;
}

module.exports = { atualizarNivel };
module.exports = { pesquisarNivel };
module.exports = { deletarNivel };
module.exports = { cadastrarNivel };