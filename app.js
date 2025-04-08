const express = require('express');

const clienteRoutes = require('./routes/clienteRoutes');

const app = express();

app.use('/iconmarketing', clienteRoutes)

module.exports = app;