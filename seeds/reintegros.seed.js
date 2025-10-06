const Reintegro = require('../models/reintegro')
const Solicitud = require('../models/solicitud')



async function seedReintegros() {
    const solicitudes = await Solicitud.find()
    const reintegros = [
        {
            cuit: "20-34567890-1",
            fecha: new Date('2025-10-06'),
            valorTotal: 15000.50,
            pago: "Transferencia",
            facturadoA: "Clínica Los Andes",
            cbu: '1234567890123456789012', // BigInt
            solicitudId: solicitudes[0]._id
        }
    ]
    try {
        await Reintegro.deleteMany({})
        await Reintegro.insertMany(reintegros)
    } catch (error) {
        console.log('Error al insertar los reintegros', error.message)
    }
}

module.exports = {seedReintegros}