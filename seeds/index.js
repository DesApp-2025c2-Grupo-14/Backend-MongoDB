const {seedPrestadores} = require('./prestadores.seed')
const {seedPacientes} = require('./pacientes.seed')
const {seedHistoriasClinicas} = require('./historias.seed')
const {seedSolicitudes} = require('./solicitudes.seed')
const {seedReintegros} = require('./reintegros.seed')
const {seedAutorizaciones} = require('./autorizaciones.seed')
const {seedRecetas} = require('./recetas.seed')
// const Producto = require('../models/producto.model')

module.exports = {
    seedPrestadores,
    seedPacientes,
    seedSolicitudes,
    seedReintegros,
    seedAutorizaciones,
    seedRecetas,
    seedHistoriasClinicas
}