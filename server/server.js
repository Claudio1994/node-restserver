//CONFIGURACIONES
require('./config/config');

//LIBRERIAS
const mongoose = require('mongoose');
const express = require('express');
const bodyParser = require('body-parser');

//INSTANCIAS
const app = express();


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

//UTILIZA LAS RUTAS CONFIGURADAS
app.use(require('./routes/usuario'));

//CONECTAR BASE DE DATOS
mongoose.connect(process.env.URLDB, { useNewUrlParser: true }, (err, res) => {

    if (err) throw err;

    console.log('Base de datos ONLINE!!');

});

//SERVIDOR
app.listen(process.env.PORT, () => {
    console.log('Escuchando puerto: ', process.env.PORT);
});