const {seedCentroMedico} = require('./centroMedico.seed')
const {seedPrestadores} = require('./prestadores.seed')
const {seedPacientes} = require('./pacientes.seed')
const {seedHistoriasClinicas} = require('./historias.seed')
const {seedSolicitudes} = require('./solicitudes.seed')
const {seedReintegros} = require('./reintegros.seed')
const {seedAutorizaciones} = require('./autorizaciones.seed')
const {seedRecetas} = require('./recetas.seed')
const {seedSituacionesTerapeuticas} = require('./situaciones.seed')
const {seedTurnos} = require('./turnos.seed')
// const Producto = require('../models/producto.model')

module.exports = {
    seedCentroMedico,
    seedPrestadores,
    seedPacientes,
    seedSolicitudes,
    seedReintegros,
    seedAutorizaciones,
    seedRecetas,
    seedHistoriasClinicas,
    seedSituacionesTerapeuticas,
    seedTurnos
}