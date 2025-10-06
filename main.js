const express = require('express')
const conectarMongoDB = require('./config/database')
const pacienteRouter = require('./routers/pacienteRouters')
const situacionTerapeuticaRouter = require('./routers/situacionTerapeuticaRouters')
const solicitudRouter = require('./routers/solicitudRouters')
const seeds = require('./seeds')
require('dotenv').config()

const app = express();
const PORT = process.env.PORT || 3001
app.use(express.json());

//Rutas
app.use('/pacientes', pacienteRouter)
app.use('/situacionesTerapeuticas', situacionTerapeuticaRouter)
app.use('/solicitudes', solicitudRouter)
console.log(process.env.SEED)
//Conectamos la base de datos
async function iniciarServidor() {
  await conectarMongoDB();

  if (process.env.SEED === 'true') {
    console.log('Insertando registros...');
    await seeds.seedPrestadores();
    await seeds.seedPacientes();
    await seeds.seedSolicitudes();
    await seeds.seedReintegros();
    await seeds.seedAutorizaciones();
    await seeds.seedRecetas();
  }

  app.listen(PORT, () => {
    console.log(`Servidor iniciado en el puerto ${PORT}`);
    console.log('Clinica-Prestador');
  });
}

iniciarServidor()
