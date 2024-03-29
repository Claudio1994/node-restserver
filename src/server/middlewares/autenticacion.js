const jwt = require('jsonwebtoken');

//========================================
//Verificar token
//========================================
let verificaToken = (req, res, next) => {
    let token = req.get('authorization');

    jwt.verify(token, process.env.SEED, (err, decoded) => {
        if (err) {
            return res.status(401).json({
                ok: false,
                err: {
                    message: 'Token no válido'
                }
            });
        }

        req.usuario = decoded.usuario;

        next();
    });
}

//========================================
//Verificar Role de Administrador
//========================================
let verificaAdminRole = (req, res, next) => {
    let usuario = req.usuario;

    if (usuario.role !== 'ADMIN_ROLE') {
        return res.status(401).json({
            ok: false,
            err: {
                message: 'El usuario no es administrador'
            }
        });
    }

    next();

};

module.exports = {
    verificaToken,
    verificaAdminRole
}