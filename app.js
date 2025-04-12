const express = require('express');

const clienteRoutes = require('./routes/clienteRoutes');
const usuarioRoutes = require('./routes/usuarioRoutes');
const contratoRoutes = require('./routes/contratoRoutes');
const nivelRoutes = require('./routes/nivelRoutes');
const app = express();

app.use('/iconmarketing', clienteRoutes)
app.use('/iconmarketing', usuarioRoutes)
app.use('/iconmarketing', contratoRoutes)
app.use('/iconmarketing', nivelRoutes)


module.exports = app;