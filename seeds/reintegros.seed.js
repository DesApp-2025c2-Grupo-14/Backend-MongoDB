const Reintegro = require('../models/reintegro')
const Solicitud = require('../models/solicitud')



async function seedReintegros() {
    const solicitudes = await Solicitud.find()
    const reintegros = [
        {
            cuit: "20-34567890-1",
            valorTotal: 15000.50,
            pago: "Transferencia",
            facturadoA: "Clínica Los Andes",
            cbu: '1234567890123456789012', // BigInt
            solicitudId: solicitudes[5]._id
        },
        {
            cuit: "30-11223344-9",
            valorTotal: 20000.50,
            pago: "Transferencia",
            facturadoA: "Centro Médico Belgrano",
            cbu: '1234567890123456789012', // BigInt
            solicitudId: solicitudes[6]._id
        },
        {
            cuit: "20-34567890-1",
            valorTotal: 30000.50,
            pago: "Transferencia",
            facturadoA: "Clínica Los Andes",
            cbu: '1234567890123456789012', // BigInt
            solicitudId: solicitudes[7]._id
        },
        {
            cuit: "20-34567890-1",
            valorTotal: 15000.50,
            pago: "Transferencia",
            facturadoA: "Clínica Los Andes",
            cbu: '1234567890123456789012', // BigInt
            solicitudId: solicitudes[8]._id
        },
        {
            cuit: "30-11223344-9",
            valorTotal: 44000.50,
            pago: "Transferencia",
            facturadoA: "Centro Médico Belgrano",
            cbu: '1234567890123456789012', // BigInt
            solicitudId: solicitudes[9]._id
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