const Autorizacion = require('../models/autorizacion')
const Solicitud = require('../models/solicitud')

async function seedAutorizaciones() {
    const solicitudes = await Solicitud.find()
    const autorizaciones = [
        { diasInternacion: 7n,  solicitudId: solicitudes[200]._id },
        { diasInternacion: 3n,  solicitudId: solicitudes[201]._id },
        { diasInternacion: 12n, solicitudId: solicitudes[202]._id },
        { diasInternacion: 5n,  solicitudId: solicitudes[203]._id },
        { diasInternacion: 9n,  solicitudId: solicitudes[204]._id },

        { diasInternacion: 4n,  solicitudId: solicitudes[205]._id },
        { diasInternacion: 8n,  solicitudId: solicitudes[206]._id },
        { diasInternacion: 1n,  solicitudId: solicitudes[207]._id },
        { diasInternacion: 6n,  solicitudId: solicitudes[208]._id },
        { diasInternacion: 10n, solicitudId: solicitudes[209]._id },

        { diasInternacion: 11n, solicitudId: solicitudes[210]._id },
        { diasInternacion: 2n,  solicitudId: solicitudes[211]._id },
        { diasInternacion: 14n, solicitudId: solicitudes[212]._id },
        { diasInternacion: 3n,  solicitudId: solicitudes[213]._id },
        { diasInternacion: 5n,  solicitudId: solicitudes[214]._id },

        { diasInternacion: 9n,  solicitudId: solicitudes[215]._id },
        { diasInternacion: 7n,  solicitudId: solicitudes[216]._id },
        { diasInternacion: 4n,  solicitudId: solicitudes[217]._id },
        { diasInternacion: 13n, solicitudId: solicitudes[218]._id },
        { diasInternacion: 6n,  solicitudId: solicitudes[219]._id },

        { diasInternacion: 8n,  solicitudId: solicitudes[220]._id },
        { diasInternacion: 2n,  solicitudId: solicitudes[221]._id },
        { diasInternacion: 11n, solicitudId: solicitudes[222]._id },
        { diasInternacion: 15n, solicitudId: solicitudes[223]._id },
        { diasInternacion: 5n,  solicitudId: solicitudes[224]._id },

        { diasInternacion: 6n,  solicitudId: solicitudes[225]._id },
        { diasInternacion: 9n,  solicitudId: solicitudes[226]._id },
        { diasInternacion: 3n,  solicitudId: solicitudes[227]._id },
        { diasInternacion: 12n, solicitudId: solicitudes[228]._id },
        { diasInternacion: 4n,  solicitudId: solicitudes[229]._id },

        { diasInternacion: 7n,  solicitudId: solicitudes[230]._id },
        { diasInternacion: 10n, solicitudId: solicitudes[231]._id },
        { diasInternacion: 1n,  solicitudId: solicitudes[232]._id },
        { diasInternacion: 13n, solicitudId: solicitudes[233]._id },
        { diasInternacion: 8n,  solicitudId: solicitudes[234]._id },

        { diasInternacion: 3n,  solicitudId: solicitudes[235]._id },
        { diasInternacion: 6n,  solicitudId: solicitudes[236]._id },
        { diasInternacion: 9n,  solicitudId: solicitudes[237]._id },
        { diasInternacion: 2n,  solicitudId: solicitudes[238]._id },
        { diasInternacion: 14n, solicitudId: solicitudes[239]._id },

        { diasInternacion: 5n,  solicitudId: solicitudes[240]._id },
        { diasInternacion: 11n, solicitudId: solicitudes[241]._id },
        { diasInternacion: 7n,  solicitudId: solicitudes[242]._id },
        { diasInternacion: 4n,  solicitudId: solicitudes[243]._id },
        { diasInternacion: 12n, solicitudId: solicitudes[244]._id },

        { diasInternacion: 8n,  solicitudId: solicitudes[245]._id },
        { diasInternacion: 10n, solicitudId: solicitudes[246]._id },
        { diasInternacion: 6n,  solicitudId: solicitudes[247]._id },
        { diasInternacion: 3n,  solicitudId: solicitudes[248]._id },
        { diasInternacion: 9n,  solicitudId: solicitudes[249]._id }
    ]
    try {
        await Autorizacion.deleteMany({})
        await Autorizacion.insertMany(autorizaciones)
    } catch (error) {
        
        console.log('Error al insertar las autorizaciones', error.message)
    }
}

module.exports = {seedAutorizaciones}