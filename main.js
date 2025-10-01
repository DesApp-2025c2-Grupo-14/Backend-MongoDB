require('dotenv').config()
const express = require("express");
const {connectDB}  = require('./db/dbMock')
const {router} = require ('./routers/pacienteRouters')

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware para JSON
app.use(express.json());

app.use('/pacientes',router)

// Conectar a la base mockeada
connectDB();

app.listen(PORT, ()=>{
    console.log(`Servidor iniciado en el puerto ${PORT}`)
    console.log('Clinica-Prestadores');
})