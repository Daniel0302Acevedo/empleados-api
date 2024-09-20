// db.js
const sql = require('mssql');

const config = {
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    server: process.env.DB_HOST,
    database: process.env.DB_DATABASE,
    options: {
        encrypt: true,
        trustServerCertificate: true
    }
};

const connectToDatabase = async () => {
    try {
        const pool = await sql.connect(config);
        console.log('Conectado a la base de datos');
        return pool;
    } catch (err) {
        console.error('Error de conexión:', err);
        throw err; // Re-lanzar el error para manejarlo en otro lugar si es necesario
    }
};

module.exports = connectToDatabase;
