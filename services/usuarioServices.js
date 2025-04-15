const { sql, config } = require('../config/db');

async function cadastrarUsuario(nome, email, senha, id_nivel) {
    const pool = await sql.connect(config);
    const resultado = await pool.request()
        .input('nome', sql.VarChar, nome)
        .input('email', sql.VarChar, email)
        .input('senha', sql.VarChar, senha)
        .input('id_nivel', sql.Int, id_nivel)
        .query(`INSERT INTO Usuario (nome, email, senha, id_nivel) VALUES (@nome, @email, @senha, @id_nivel)`);
    return resultado.rowsAffected[0] > 0;
}

//Função para deletar usuario no banco de dados por nome
async function deletarUsuario(nome) {
    const pool = await sql.connect(config);
    const resultado = await pool.request()
        .input('nome', sql.VarChar, nome)
        .query(`DELETE FROM Usuario WHERE nome = @nome`);
    return resultado.rowsAffected[0] > 0;
}

//Função para atualizar usuario no banco de dados
async function atualizarUsuario(nome, email, senha, id_nivel) {
    const pool = await sql.connect(config);
    const resultado = await pool.request()
        .input('nome', sql.VarChar, nome)
        .input('email', sql.VarChar, email)
        .input('senha', sql.VarChar, senha)
        .input('id_nivel', sql.Int, id_nivel)
        .query(`UPDATE Usuario SET email = @email, senha = @senha, id_nivel = @id_nivel WHERE nome = @nome`);
    return resultado.rowsAffected[0] > 0;
}
//Função para pesquisar usuario no banco de dados
async function pesquisarUsuario() {
    const requisicaoAcessoDB = await sql.connect(config);
    const resultado = await requisicaoAcessoDB.request().query`SELECT * FROM Usuario`;
    return resultado.recordset;
}

module.exports = { atualizarUsuario };
module.exports = { pesquisarUsuario };
module.exports = { deletarUsuario };
module.exports = { cadastrarUsuario };