//========================================
//PUERTO
//========================================

process.env.PORT = process.env.PORT || 3000;


//========================================
//Entorno
//========================================

process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

//========================================
//Fecha vencimiento Token
//========================================
// 1 hora

process.env.CADUCIDAD_TOKEN = 60 * 60;

//========================================
//SEED de autenticación
//========================================

process.env.SEED = process.env.SEED || 'secret';

//========================================
//BASE DE DATOS
//========================================

let urlDB;

if (process.env.NODE_ENV === 'dev') {
    urlDB = 'mongodb://localhost:27017/cafe';
} else {
    urlDB = process.env.MONGO_URI;
}
process.env.URLDB = urlDB;