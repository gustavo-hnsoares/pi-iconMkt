const {sql, config} = require ('../config/db');

//Função para pesqisar clientes no banco de dados
async function pesqisarCliente() {
    const requisicaoAcessoDB = await sql.connect(config);
    const resultado = await requisicaoAcessoDB.request().query`SELECT * FROM Cliente`;
    return resultado.recordset
}

module.exports = {pesqisarCliente};