const Reintegro = require('../models/reintegro')
const Solicitud = require('../models/solicitud')



async function seedReintegros() {
    const solicitudes = await Solicitud.find()
    const reintegros = [
        {
            cuit: "20-34567890-1",
            valorTotal: 15200.75,
            pago: "Transferencia",
            facturadoA: "Hospital Italiano",
            cbu: "0170200023456789012345",
            solicitudId: solicitudes[100]._id
        },
        {
            cuit: "30-11223344-9",
            valorTotal: 28400.20,
            pago: "Transferencia",
            facturadoA: "Particular",
            cbu: "0270132445678901234567",
            solicitudId: solicitudes[101]._id
        },
        {
            cuit: "20-55667788-0",
            valorTotal: 17850.90,
            pago: "Transferencia",
            facturadoA: "Particular",
            cbu: "0110599543219876543210",
            solicitudId: solicitudes[102]._id
        },
        {
            cuit: "30-99887766-3",
            valorTotal: 46200.10,
            pago: "Transferencia",
            facturadoA: "Particular",
            cbu: "0720156789012345678901",
            solicitudId: solicitudes[103]._id
        },
        {
            cuit: "33-22334455-2",
            valorTotal: 30500.80,
            pago: "Transferencia",
            facturadoA: "Particular",
            cbu: "0290012345678909876543",
            solicitudId: solicitudes[104]._id
        },
        {
            cuit: "20-33445566-7",
            valorTotal: 5200.50,
            pago: "Transferencia",
            facturadoA: "Particular",
            cbu: "2850598745632109876543",
            solicitudId: solicitudes[105]._id
        },
        {
            cuit: "27-44556677-1",
            valorTotal: 74300.30,
            pago: "Transferencia",
            facturadoA: "Consultorio Sur",
            cbu: "0170033045678912345678",
            solicitudId: solicitudes[106]._id
        },
        {
            cuit: "30-55443322-0",
            valorTotal: 21300.90,
            pago: "Transferencia",
            facturadoA: "Clínica del Sol",
            cbu: "0650591234987654321098",
            solicitudId: solicitudes[107]._id
        },
        {
            cuit: "20-87654321-9",
            valorTotal: 18400.00,
            pago: "Transferencia",
            facturadoA: "Sanatorio Güemes",
            cbu: "0720412345009876543210",
            solicitudId: solicitudes[108]._id
        },
        {
            cuit: "23-12349876-4",
            valorTotal: 39000.25,
            pago: "Transferencia",
            facturadoA: "Unión Personal",
            cbu: "0110100098765432101234",
            solicitudId: solicitudes[109]._id
        },

        // 11
        {
            cuit: "30-12345678-1",
            valorTotal: 22500.10,
            pago: "Transferencia",
            facturadoA: "Hospital Británico",
            cbu: "0170200043216789054321",
            solicitudId: solicitudes[110]._id
        },
        {
            cuit: "20-99887766-3",
            valorTotal: 5800.90,
            pago: "Transferencia",
            facturadoA: "Particular",
            cbu: "1430009876543210123456",
            solicitudId: solicitudes[111]._id
        },
        {
            cuit: "30-88776655-2",
            valorTotal: 31000.75,
            pago: "Transferencia",
            facturadoA: "Particular",
            cbu: "1910023456789001234567",
            solicitudId: solicitudes[112]._id
        },
        {
            cuit: "20-11224455-6",
            valorTotal: 44000.10,
            pago: "Transferencia",
            facturadoA: "Centro Médico Belgrano",
            cbu: "0720087654321987654321",
            solicitudId: solicitudes[113]._id
        },
        {
            cuit: "30-55332211-9",
            valorTotal: 15900.40,
            pago: "Transferencia",
            facturadoA: "Particular",
            cbu: "0110622234567890123456",
            solicitudId: solicitudes[114]._id
        },

        // 16
        {
            cuit: "23-55667788-1",
            valorTotal: 7200.30,
            pago: "Transferencia",
            facturadoA: "Consultorios del Parque",
            cbu: "0170330021456789054321",
            solicitudId: solicitudes[115]._id
        },
        {
            cuit: "27-66554433-0",
            valorTotal: 64000.90,
            pago: "Transferencia",
            facturadoA: "Clínica Olivos",
            cbu: "0720123487654321098765",
            solicitudId: solicitudes[116]._id
        },
        {
            cuit: "30-22223333-4",
            valorTotal: 20500.20,
            pago: "Transferencia",
            facturadoA: "Particular",
            cbu: "2850256732109876543210",
            solicitudId: solicitudes[117]._id
        },
        {
            cuit: "20-55446677-2",
            valorTotal: 33800.50,
            pago: "Transferencia",
            facturadoA: "Particular",
            cbu: "0650598765432109876500",
            solicitudId: solicitudes[118]._id
        },
        {
            cuit: "20-11223344-5",
            valorTotal: 48700.80,
            pago: "Transferencia",
            facturadoA: "Particular",
            cbu: "0110522200123456789011",
            solicitudId: solicitudes[119]._id
        },

        // 21
        {
            cuit: "30-33445566-7",
            valorTotal: 76000.00,
            pago: "Transferencia",
            facturadoA: "CEMIC",
            cbu: "0170009876543212345678",
            solicitudId: solicitudes[120]._id
        },
        {
            cuit: "33-66778899-0",
            valorTotal: 13400.99,
            pago: "Transferencia",
            facturadoA: "Consultorio Norte",
            cbu: "1910034567890123987654",
            solicitudId: solicitudes[121]._id
        },
        {
            cuit: "20-30112233-8",
            valorTotal: 24500.10,
            pago: "Transferencia",
            facturadoA: "Particular",
            cbu: "0720044445678912345000",
            solicitudId: solicitudes[122]._id
        },
        {
            cuit: "20-88990011-4",
            valorTotal: 9000.40,
            pago: "Transferencia",
            facturadoA: "Particular",
            cbu: "1430001002003004005006",
            solicitudId: solicitudes[123]._id
        },
        {
            cuit: "27-44557788-6",
            valorTotal: 51200.60,
            pago: "Transferencia",
            facturadoA: "Sanatorio Anchorena",
            cbu: "0170234509876543210012",
            solicitudId: solicitudes[124]._id
        },

        // 26
        {
            cuit: "20-10293847-5",
            valorTotal: 17500.90,
            pago: "Transferencia",
            facturadoA: "Hospital Español",
            cbu: "0110333300123498765432",
            solicitudId: solicitudes[125]._id
        },
        {
            cuit: "30-11221122-3",
            valorTotal: 42000.80,
            pago: "Transferencia",
            facturadoA: "Clínica Santa Isabel",
            cbu: "0720055556789009876543",
            solicitudId: solicitudes[126]._id
        },
        {
            cuit: "20-12344321-9",
            valorTotal: 23900.70,
            pago: "Transferencia",
            facturadoA: "Particular",
            cbu: "0170400009876543212345",
            solicitudId: solicitudes[127]._id
        },
        {
            cuit: "30-99880011-7",
            valorTotal: 78500.50,
            pago: "Transferencia",
            facturadoA: "Hospital Alemán",
            cbu: "0110444467890012345678",
            solicitudId: solicitudes[128]._id
        },
        {
            cuit: "23-44556677-9",
            valorTotal: 9800.90,
            pago: "Transferencia",
            facturadoA: "Consultorio Independencia",
            cbu: "2850555500112233445566",
            solicitudId: solicitudes[129]._id
        },

        // 31
        {
            cuit: "20-55664433-0",
            valorTotal: 36000.20,
            pago: "Transferencia",
            facturadoA: "Particular",
            cbu: "0720033332109876001234",
            solicitudId: solicitudes[130]._id
        },
        {
            cuit: "30-66778899-3",
            valorTotal: 51000.80,
            pago: "Transferencia",
            facturadoA: "Particular",
            cbu: "0650598888777666555444",
            solicitudId: solicitudes[131]._id
        },
        {
            cuit: "27-88997766-5",
            valorTotal: 14900.10,
            pago: "Transferencia",
            facturadoA: "CEMIC",
            cbu: "0110109080706050403020",
            solicitudId: solicitudes[132]._id
        },
        {
            cuit: "20-22113344-1",
            valorTotal: 29800.90,
            pago: "Transferencia",
            facturadoA: "Particular",
            cbu: "0170666600123456789099",
            solicitudId: solicitudes[133]._id
        },
        {
            cuit: "30-44332211-6",
            valorTotal: 18400.70,
            pago: "Transferencia",
            facturadoA: "Hospital Fernández",
            cbu: "0720077776543210987611",
            solicitudId: solicitudes[134]._id
        },

        // 36
        {
            cuit: "20-55667722-3",
            valorTotal: 60000.00,
            pago: "Transferencia",
            facturadoA: "Clínica San Camilo",
            cbu: "2850666612345678901234",
            solicitudId: solicitudes[135]._id
        },
        {
            cuit: "23-22114455-4",
            valorTotal: 9700.25,
            pago: "Transferencia",
            facturadoA: "Particular",
            cbu: "1430009998887776665554",
            solicitudId: solicitudes[136]._id
        },
        {
            cuit: "30-88776655-2",
            valorTotal: 31400.60,
            pago: "Transferencia",
            facturadoA: "Hospital de Clínicas",
            cbu: "0170777700123456789034",
            solicitudId: solicitudes[137]._id
        },
        {
            cuit: "20-33441122-1",
            valorTotal: 42300.10,
            pago: "Transferencia",
            facturadoA: "Sanatorio Mitre",
            cbu: "0720099912345678001112",
            solicitudId: solicitudes[138]._id
        },
        {
            cuit: "30-66554422-0",
            valorTotal: 26700.40,
            pago: "Transferencia",
            facturadoA: "Particular",
            cbu: "0110888800112233445566",
            solicitudId: solicitudes[139]._id
        },

        // 41
        {
            cuit: "20-55663344-2",
            valorTotal: 5100.90,
            pago: "Transferencia",
            facturadoA: "Farmacia Santa Rosa",
            cbu: "0650599991234509876543",
            solicitudId: solicitudes[140]._id
        },
        {
            cuit: "27-77889900-3",
            valorTotal: 80500.00,
            pago: "Transferencia",
            facturadoA: "Centro Médico Caballito",
            cbu: "0170999987654321009876",
            solicitudId: solicitudes[141]._id
        },
        {
            cuit: "20-44332255-2",
            valorTotal: 15600.40,
            pago: "Transferencia",
            facturadoA: "Clínica San José",
            cbu: "0720202023456789001200",
            solicitudId: solicitudes[142]._id
        },
        {
            cuit: "30-99001122-8",
            valorTotal: 22100.10,
            pago: "Transferencia",
            facturadoA: "Consultorio Sur",
            cbu: "0110999988776655443322",
            solicitudId: solicitudes[143]._id
        },
        {
            cuit: "20-22335566-8",
            valorTotal: 43700.90,
            pago: "Transferencia",
            facturadoA: "Hospital Evita",
            cbu: "2850111122233344455566",
            solicitudId: solicitudes[144]._id
        },

        // 46
        {
            cuit: "33-11224455-7",
            valorTotal: 7400.10,
            pago: "Transferencia",
            facturadoA: "Particular",
            cbu: "1430005678901234567890",
            solicitudId: solicitudes[145]._id
        },
        {
            cuit: "20-99887744-3",
            valorTotal: 25700.80,
            pago: "Transferencia",
            facturadoA: "Instituto Cardiovascular",
            cbu: "0170123412345678999000",
            solicitudId: solicitudes[146]._id
        },
        {
            cuit: "30-22334455-1",
            valorTotal: 36400.50,
            pago: "Transferencia",
            facturadoA: "Sanatorio Finochietto",
            cbu: "0720333376543210012345",
            solicitudId: solicitudes[147]._id
        },
        {
            cuit: "20-88774433-9",
            valorTotal: 14900.20,
            pago: "Transferencia",
            facturadoA: "Hospital Pirovano",
            cbu: "1910044445555666677778",
            solicitudId: solicitudes[148]._id
        },
        {
            cuit: "27-66778811-9",
            valorTotal: 58200.00,
            pago: "Transferencia",
            facturadoA: "Clínica Bessone",
            cbu: "0110666699998888777766",
            solicitudId: solicitudes[149]._id
        },
        { cuit: "27-66778811-9", valorTotal: 58200.00, pago: "Transferencia", facturadoA: "Clínica Bessone", cbu: "0110666699998888777766", solicitudId: solicitudes[150]._id },
        { cuit: "20-12345678-5", valorTotal: 43500.50, pago: "Cheque", facturadoA: "Centro Salud Vida", cbu: "0110123456789012345678", solicitudId: solicitudes[151]._id },
        { cuit: "23-87654321-2", valorTotal: 72500.75, pago: "Efectivo", facturadoA: "Consultorios NutriVida", cbu: "0110987654321098765432", solicitudId: solicitudes[152]._id },
        { cuit: "30-11223344-6", valorTotal: 19800.00, pago: "Transferencia", facturadoA: "FisioCenter", cbu: "0110112233445566778899", solicitudId: solicitudes[153]._id },
        { cuit: "27-55667788-3", valorTotal: 65000.25, pago: "Cheque", facturadoA: "Dermacenter", cbu: "0110556677889900112233", solicitudId: solicitudes[154]._id },
        { cuit: "20-33445566-7", valorTotal: 47000.00, pago: "Efectivo", facturadoA: "CardioCenter", cbu: "0110334455667788990011", solicitudId: solicitudes[155]._id },
        { cuit: "23-99887766-1", valorTotal: 89000.00, pago: "Transferencia", facturadoA: "Clínica OrtoPlus", cbu: "0110998877665544332211", solicitudId: solicitudes[156]._id },
        { cuit: "30-44556677-8", valorTotal: 52000.75, pago: "Cheque", facturadoA: "Clínica FemVida", cbu: "0110445566778899001122", solicitudId: solicitudes[157]._id },
        { cuit: "27-22334455-0", valorTotal: 61000.50, pago: "Efectivo", facturadoA: "Clínica Visión", cbu: "0110223344556677889900", solicitudId: solicitudes[158]._id },
        { cuit: "20-55667788-9", valorTotal: 34500.00, pago: "Transferencia", facturadoA: "Consultorios Pequeños Pasos", cbu: "0110556677889900112233", solicitudId: solicitudes[159]._id },
        { cuit: "23-11223344-5", valorTotal: 41500.00, pago: "Cheque", facturadoA: "Clínica Bessone", cbu: "0110112233445566778899", solicitudId: solicitudes[160]._id },
        { cuit: "30-66778899-2", valorTotal: 73500.25, pago: "Efectivo", facturadoA: "Centro Salud Vida", cbu: "0110667788990011223344", solicitudId: solicitudes[161]._id },
        { cuit: "27-99887766-3", valorTotal: 50500.50, pago: "Transferencia", facturadoA: "Consultorios NutriVida", cbu: "0110998877665544332211", solicitudId: solicitudes[162]._id },
        { cuit: "20-44556677-4", valorTotal: 62000.00, pago: "Cheque", facturadoA: "FisioCenter", cbu: "0110445566778899001122", solicitudId: solicitudes[163]._id },
        { cuit: "23-22334455-6", valorTotal: 53000.75, pago: "Efectivo", facturadoA: "Dermacenter", cbu: "0110223344556677889900", solicitudId: solicitudes[164]._id },
        { cuit: "30-33445566-7", valorTotal: 45000.00, pago: "Transferencia", facturadoA: "CardioCenter", cbu: "0110334455667788990011", solicitudId: solicitudes[165]._id },
        { cuit: "27-55667788-0", valorTotal: 78000.25, pago: "Cheque", facturadoA: "Clínica OrtoPlus", cbu: "0110556677889900112233", solicitudId: solicitudes[166]._id },
        { cuit: "20-11223344-8", valorTotal: 39500.50, pago: "Efectivo", facturadoA: "Clínica FemVida", cbu: "0110112233445566778899", solicitudId: solicitudes[167]._id },
        { cuit: "23-66778811-3", valorTotal: 67000.00, pago: "Transferencia", facturadoA: "Clínica Visión", cbu: "0110667788990011223344", solicitudId: solicitudes[168]._id },
        { cuit: "30-99887766-5", valorTotal: 48500.75, pago: "Cheque", facturadoA: "Consultorios Pequeños Pasos", cbu: "0110998877665544332211", solicitudId: solicitudes[169]._id },
        { cuit: "27-22334455-2", valorTotal: 52500.00, pago: "Efectivo", facturadoA: "Clínica Bessone", cbu: "0110223344556677889900", solicitudId: solicitudes[170]._id },
        { cuit: "20-33445566-3", valorTotal: 71000.25, pago: "Transferencia", facturadoA: "Centro Salud Vida", cbu: "0110334455667788990011", solicitudId: solicitudes[171]._id },
        { cuit: "23-55667788-1", valorTotal: 59500.50, pago: "Cheque", facturadoA: "Consultorios NutriVida", cbu: "0110556677889900112233", solicitudId: solicitudes[172]._id },
        { cuit: "30-11223344-9", valorTotal: 43500.00, pago: "Efectivo", facturadoA: "FisioCenter", cbu: "0110112233445566778899", solicitudId: solicitudes[173]._id },
        { cuit: "27-66778899-4", valorTotal: 62500.75, pago: "Transferencia", facturadoA: "Dermacenter", cbu: "0110667788990011223344", solicitudId: solicitudes[174]._id },
        { cuit: "20-99887766-7", valorTotal: 54500.00, pago: "Cheque", facturadoA: "CardioCenter", cbu: "0110998877665544332211", solicitudId: solicitudes[175]._id },
        { cuit: "23-44556677-2", valorTotal: 47500.50, pago: "Efectivo", facturadoA: "Clínica OrtoPlus", cbu: "0110445566778899001122", solicitudId: solicitudes[176]._id },
        { cuit: "30-22334455-3", valorTotal: 71500.00, pago: "Transferencia", facturadoA: "Clínica FemVida", cbu: "0110223344556677889900", solicitudId: solicitudes[177]._id },
        { cuit: "27-33445566-8", valorTotal: 39500.25, pago: "Cheque", facturadoA: "Clínica Visión", cbu: "0110334455667788990011", solicitudId: solicitudes[178]._id },
        { cuit: "20-55667788-4", valorTotal: 60500.50, pago: "Efectivo", facturadoA: "Consultorios Pequeños Pasos", cbu: "0110556677889900112233", solicitudId: solicitudes[179]._id },
        { cuit: "23-11223344-1", valorTotal: 49000.00, pago: "Transferencia", facturadoA: "Clínica Bessone", cbu: "0110112233445566778899", solicitudId: solicitudes[180]._id },
        { cuit: "30-66778811-6", valorTotal: 52500.75, pago: "Cheque", facturadoA: "Centro Salud Vida", cbu: "0110666699998888777766", solicitudId: solicitudes[181]._id },
        { cuit: "27-99887766-9", valorTotal: 61500.00, pago: "Efectivo", facturadoA: "Consultorios NutriVida", cbu: "0110998877665544332211", solicitudId: solicitudes[182]._id },
        { cuit: "20-22334455-0", valorTotal: 46000.50, pago: "Transferencia", facturadoA: "FisioCenter", cbu: "0110223344556677889900", solicitudId: solicitudes[183]._id },
        { cuit: "23-33445566-5", valorTotal: 78000.00, pago: "Cheque", facturadoA: "Dermacenter", cbu: "0110334455667788990011", solicitudId: solicitudes[184]._id },
        { cuit: "30-55667788-2", valorTotal: 53000.25, pago: "Efectivo", facturadoA: "CardioCenter", cbu: "0110556677889900112233", solicitudId: solicitudes[185]._id },
        { cuit: "27-11223344-7", valorTotal: 61000.50, pago: "Transferencia", facturadoA: "Clínica OrtoPlus", cbu: "0110112233445566778899", solicitudId: solicitudes[186]._id },
        { cuit: "20-66778899-1", valorTotal: 44500.00, pago: "Cheque", facturadoA: "Clínica FemVida", cbu: "0110667788990011223344", solicitudId: solicitudes[187]._id },
        { cuit: "23-99887766-4", valorTotal: 69000.75, pago: "Efectivo", facturadoA: "Clínica Visión", cbu: "0110998877665544332211", solicitudId: solicitudes[188]._id },
        { cuit: "30-44556677-5", valorTotal: 50500.00, pago: "Transferencia", facturadoA: "Consultorios Pequeños Pasos", cbu: "0110445566778899001122", solicitudId: solicitudes[189]._id },
        { cuit: "27-22334455-8", valorTotal: 72500.25, pago: "Cheque", facturadoA: "Clínica Bessone", cbu: "0110223344556677889900", solicitudId: solicitudes[190]._id },
        { cuit: "20-33445566-9", valorTotal: 59500.50, pago: "Efectivo", facturadoA: "Centro Salud Vida", cbu: "0110334455667788990011", solicitudId: solicitudes[191]._id },
        { cuit: "23-55667788-3", valorTotal: 41500.00, pago: "Transferencia", facturadoA: "Consultorios NutriVida", cbu: "0110556677889900112233", solicitudId: solicitudes[192]._id },
        { cuit: "30-11223344-0", valorTotal: 63500.75, pago: "Cheque", facturadoA: "FisioCenter", cbu: "0110112233445566778899", solicitudId: solicitudes[193]._id },
        { cuit: "27-66778811-2", valorTotal: 47000.00, pago: "Efectivo", facturadoA: "Dermacenter", cbu: "0110666699998888777766", solicitudId: solicitudes[194]._id },
        { cuit: "20-99887766-6", valorTotal: 58000.25, pago: "Transferencia", facturadoA: "CardioCenter", cbu: "0110998877665544332211", solicitudId: solicitudes[195]._id },
        { cuit: "23-22334455-9", valorTotal: 49500.50, pago: "Cheque", facturadoA: "Clínica OrtoPlus", cbu: "0110223344556677889900", solicitudId: solicitudes[196]._id },
        { cuit: "30-33445566-2", valorTotal: 72000.00, pago: "Efectivo", facturadoA: "Clínica FemVida", cbu: "0110334455667788990011", solicitudId: solicitudes[197]._id },
        { cuit: "27-55667788-5", valorTotal: 50500.75, pago: "Transferencia", facturadoA: "Clínica Visión", cbu: "0110556677889900112233", solicitudId: solicitudes[198]._id },
        { cuit: "20-11223344-2", valorTotal: 61500.00, pago: "Cheque", facturadoA: "Consultorios Pequeños Pasos", cbu: "0110112233445566778899", solicitudId: solicitudes[199]._id }
    ];
    try {
        await Reintegro.deleteMany({})
        await Reintegro.insertMany(reintegros)
    } catch (error) {
        console.log('Error al insertar los reintegros', error.message)
    }
}

module.exports = {seedReintegros}