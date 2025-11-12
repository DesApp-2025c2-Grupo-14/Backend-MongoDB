const Autorizacion = require('../models/autorizacion')
const Solicitud = require('../models/solicitud')

async function seedAutorizaciones() {
    const solicitudes = await Solicitud.find()
    const autorizaciones = [
        {
            diasInternacion: 5n,
            solicitudId: solicitudes[10]._id
        },
        {
            diasInternacion: 8n,
            solicitudId: solicitudes[11]._id
        },
        {
            diasInternacion: 10n,
            solicitudId: solicitudes[12]._id
        },
        {
            diasInternacion: 2n,
            solicitudId: solicitudes[13]._id
        },
        {
            diasInternacion: 6n,
            solicitudId: solicitudes[14]._id
        }
    ]
    try {
        await Autorizacion.deleteMany({})
        await Autorizacion.insertMany(autorizaciones)
    } catch (error) {
        
        console.log('Error al insertar las autorizaciones', error.message)
    }
}

module.exports = {seedAutorizaciones}