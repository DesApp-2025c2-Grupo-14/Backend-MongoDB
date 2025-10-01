const express = require('express')
const conectarMongoDB = require('./config/database')
const pacienteRouter = require('./routers/pacienteRouters')
require('dotenv').config()

const app = express();
const PORT = process.env.PORT || 3001
app.use(express.json());

//Rutas
app.use('/pacientes', pacienteRouter)

//Conectamos la base de datos
conectarMongoDB()
app.listen(PORT, ()=>{
    console.log(`Servidor iniciado en el puerto ${PORT}`)
    console.log('Clinica-Prestador');
});

