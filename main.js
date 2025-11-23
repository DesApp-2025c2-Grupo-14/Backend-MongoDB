const express = require('express')
const conectarMongoDB = require('./config/database')
const pacienteRouter = require('./routers/pacienteRouters')
const situacionTerapeuticaRouter = require('./routers/situacionTerapeuticaRouters')
const solicitudRouter = require('./routers/solicitudRouters')
const turnoRouter = require ('./routers/turnoRouters')
const prestadorRouter = require('./routers/prestadorRouters');
const seeds = require('./seeds')
const cors = require('cors')
require('dotenv').config()

const app = express();
const PORT = process.env.PORT || 3001
app.use(cors({ origin: 'http://localhost:5174' }));
app.use(express.json());

//Rutas
app.use('/pacientes', pacienteRouter)
app.use('/situacionesTerapeuticas', situacionTerapeuticaRouter)
app.use('/solicitudes', solicitudRouter)
app.use('/turnos',turnoRouter)
app.use('/prestadores', prestadorRouter);
console.log(process.env.SEED)
//Conectamos la base de datos
async function iniciarServidor() {
  await conectarMongoDB();

  if (process.env.SEED === 'true') {
  console.log('🌱 Insertando registros de prueba...\n');

  try {
    await seeds.seedPrestadores();
    console.log('✅ Prestadores insertados');
    await seeds.seedPacientes();
    console.log('✅ Pacientes insertados');
    await seeds.seedHistoriasClinicas();
    console.log('✅ Historias clínicas insertadas');
    await seeds.seedSituacionesTerapeuticas();
    console.log('✅ Situaciones terapéuticas insertadas');
    await seeds.seedSolicitudes();
    console.log('✅ Solicitudes insertadas');
    await seeds.seedReintegros();
    console.log('✅ Reintegros insertados');
    await seeds.seedAutorizaciones();
    console.log('✅ Autorizaciones insertadas');
    await seeds.seedRecetas();
    console.log('✅ Recetas insertadas');
    await seeds.seedTurnos();
    console.log('✅ Turnos insertados');

    console.log('\n🌿 Seeding completo sin errores.');
  } catch (error) {
    console.error('❌ Error durante el seeding:', error.message);
  }
}
  app.listen(PORT, () => {
    console.log(`Servidor iniciado en el puerto ${PORT}`);
    console.log('Clinica-Prestador');
  });
}

iniciarServidor()
