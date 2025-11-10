const Autorizacion = require('../models/autorizacion')
const Solicitud = require('../models/solicitud')

async function seedAutorizaciones() {
    const solicitudes = await Solicitud.find()
    const autorizaciones = [
        {
            diasInternacion: 5n,
            solicitudId: solicitudes[1]._id
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