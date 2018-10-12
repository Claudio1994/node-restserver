//LIBRERIAS
const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

//MODELO
const Usuario = require('../models/usuario');

//INSTANCIAS
const app = express();

app.post('/', (req, res) => {

    let body = req.body;

    Usuario.findOne({ email: body.email }, (err, usuarioDB) => {
        debugger;
        if (err) {
            return res.status(500).json({
                ok: false,
                err
            });
        }

        if (!usuarioDB) {
            return res.status(400).json({
                ok: false,
                err: {
                    message: '(Usuario) o contraseña incorrecto'
                }
            });
        }

        if (!bcrypt.compareSync(body.password, usuarioDB.password)) {
            return res.status(400).json({
                ok: false,
                err: {
                    message: 'Usuario o (contraseña) incorrecto'
                }
            });
        }

        let token = jwt.sign({
            usuario: usuarioDB,

        }, process.env.SEED, { expiresIn: 60 * 60 });

        res.json({
            ok: true,
            usuario: usuarioDB,
            token
        });

    });

});

module.exports = app;