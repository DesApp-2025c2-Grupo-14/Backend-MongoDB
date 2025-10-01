const express = require('express')
const conectarMongoDB = require('./config/database')
const pacienteRouter = require('./routers/pacienteRouters')
const situacionTerapeuticaRouter = require('./routers/situacionTerapeuticaRouters')
const solicitudRouter = require('./routers/solicitudRouters')

require('dotenv').config()

const app = express();
const PORT = process.env.PORT || 3001
app.use(express.json());

//Rutas
app.use('/pacientes', pacienteRouter)
app.use('/situacionesTerapeuticas', situacionTerapeuticaRouter)
app.use('/solicitudes', solicitudRouter)

//Conectamos la base de datos
conectarMongoDB()
app.listen(PORT, ()=>{
    console.log(`Servidor iniciado en el puerto ${PORT}`)
    console.log('Clinica-Prestador');
});

