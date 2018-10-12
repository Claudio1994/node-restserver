//CONFIGURACIONES
require('./server/config/config');

//LIBRERIAS
const mongoose = require('mongoose');
const express = require('express');
const path = require('path');
var bodyParser = require('body-parser')

//INSTANCIAS
const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())

//UTILIZA LAS RUTAS CONFIGURADAS
app.use(require('./server/routes/index'));

//CONECTAR BASE DE DATOS
mongoose.connect(process.env.URLDB, { useNewUrlParser: true }, (err, res) => {

    if (err) throw err;

    console.log('Base de datos ONLINE!!');

});

// Archivos Estáticos
app.use(express.static(path.join(__dirname, 'public')));

//SERVIDOR
app.listen(process.env.PORT, () => {
    console.log('Escuchando puerto: ', process.env.PORT);
});