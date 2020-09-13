const express = require('express');
const app = express();



app.use(require('./identificacion/persona'));
app.use(require('./identificacion/domicilio'));
app.use(require('./identificacion/roles'));
app.use(require('./identificacion/telefono'));
app.use(require('./identificacion/usuario'));



module.exports = app;