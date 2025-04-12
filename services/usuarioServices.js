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

module.exports = { cadastrarUsuario };