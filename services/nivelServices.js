const { sql, config } = require('../config/db');

async function cadastrarNivel(nome) {
    const pool = await sql.connect(config);
    const resultado = await pool.request()
        .input('nome', sql.VarChar, nome)
        .query(`INSERT INTO nivelAcesso (nome) VALUES (@nome)`);
    return resultado.rowsAffected[0] > 0;

}