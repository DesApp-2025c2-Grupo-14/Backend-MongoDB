const Autorizacion = require('../models/autorizacion')
const Solicitud = require('../models/solicitud')

async function seedAutorizaciones() {
    const solicitudes = await Solicitud.find()
    const autorizaciones = [
        { diasInternacion: 7n,  solicitudId: solicitudes[100]._id },
        { diasInternacion: 3n,  solicitudId: solicitudes[101]._id },
        { diasInternacion: 12n, solicitudId: solicitudes[102]._id },
        { diasInternacion: 5n,  solicitudId: solicitudes[103]._id },
        { diasInternacion: 9n,  solicitudId: solicitudes[104]._id },

        { diasInternacion: 4n,  solicitudId: solicitudes[105]._id },
        { diasInternacion: 8n,  solicitudId: solicitudes[106]._id },
        { diasInternacion: 1n,  solicitudId: solicitudes[107]._id },
        { diasInternacion: 6n,  solicitudId: solicitudes[108]._id },
        { diasInternacion: 10n, solicitudId: solicitudes[109]._id },

        { diasInternacion: 11n, solicitudId: solicitudes[110]._id },
        { diasInternacion: 2n,  solicitudId: solicitudes[111]._id },
        { diasInternacion: 14n, solicitudId: solicitudes[112]._id },
        { diasInternacion: 3n,  solicitudId: solicitudes[113]._id },
        { diasInternacion: 5n,  solicitudId: solicitudes[114]._id },

        { diasInternacion: 9n,  solicitudId: solicitudes[115]._id },
        { diasInternacion: 7n,  solicitudId: solicitudes[116]._id },
        { diasInternacion: 4n,  solicitudId: solicitudes[117]._id },
        { diasInternacion: 13n, solicitudId: solicitudes[118]._id },
        { diasInternacion: 6n,  solicitudId: solicitudes[119]._id },

        { diasInternacion: 8n,  solicitudId: solicitudes[120]._id },
        { diasInternacion: 2n,  solicitudId: solicitudes[121]._id },
        { diasInternacion: 11n, solicitudId: solicitudes[122]._id },
        { diasInternacion: 15n, solicitudId: solicitudes[123]._id },
        { diasInternacion: 5n,  solicitudId: solicitudes[124]._id },

        { diasInternacion: 6n,  solicitudId: solicitudes[125]._id },
        { diasInternacion: 9n,  solicitudId: solicitudes[126]._id },
        { diasInternacion: 3n,  solicitudId: solicitudes[127]._id },
        { diasInternacion: 12n, solicitudId: solicitudes[128]._id },
        { diasInternacion: 4n,  solicitudId: solicitudes[129]._id },

        { diasInternacion: 7n,  solicitudId: solicitudes[130]._id },
        { diasInternacion: 10n, solicitudId: solicitudes[131]._id },
        { diasInternacion: 1n,  solicitudId: solicitudes[132]._id },
        { diasInternacion: 13n, solicitudId: solicitudes[133]._id },
        { diasInternacion: 8n,  solicitudId: solicitudes[134]._id },

        { diasInternacion: 3n,  solicitudId: solicitudes[135]._id },
        { diasInternacion: 6n,  solicitudId: solicitudes[136]._id },
        { diasInternacion: 9n,  solicitudId: solicitudes[137]._id },
        { diasInternacion: 2n,  solicitudId: solicitudes[138]._id },
        { diasInternacion: 14n, solicitudId: solicitudes[139]._id },

        { diasInternacion: 5n,  solicitudId: solicitudes[140]._id },
        { diasInternacion: 11n, solicitudId: solicitudes[141]._id },
        { diasInternacion: 7n,  solicitudId: solicitudes[142]._id },
        { diasInternacion: 4n,  solicitudId: solicitudes[143]._id },
        { diasInternacion: 12n, solicitudId: solicitudes[144]._id },

        { diasInternacion: 8n,  solicitudId: solicitudes[145]._id },
        { diasInternacion: 10n, solicitudId: solicitudes[146]._id },
        { diasInternacion: 6n,  solicitudId: solicitudes[147]._id },
        { diasInternacion: 3n,  solicitudId: solicitudes[148]._id },
        { diasInternacion: 9n,  solicitudId: solicitudes[149]._id }
    ]
    try {
        await Autorizacion.deleteMany({})
        await Autorizacion.insertMany(autorizaciones)
    } catch (error) {
        
        console.log('Error al insertar las autorizaciones', error.message)
    }
}

module.exports = {seedAutorizaciones}