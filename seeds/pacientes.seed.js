const Paciente = require('../models/paciente')

const pacientes = [
    {
    tipoDocumento: "DNI",
    dni: "30123456",
    nombre: "María",
    apellido: "González",
    fechaNacimiento: new Date("1975-03-12"),
    telefono: "1134567890",
    mail: "MariGonz@gmail.com.ar",
    direccion: "Aviador Patallo 2148",
    nroAfiliado: "10001-01",
    parentesco: "Titular",
    planMedico: "Plata"
  },
  {
    tipoDocumento: "DNI",
    dni: "38109876",
    nombre: "Lucía",
    apellido: "González",
    fechaNacimiento: new Date("2000-04-20"),
    telefono: "1112345679",
    mail: "LuciGonz@gmail.com.ar",
    direccion: "Aviador Patallo 2148",
    nroAfiliado: "10001-02",
    parentesco: "Hija",
    planMedico: "Oro"
  },
  {
    tipoDocumento: "DNI",
    dni: "27876543",
    nombre: "Martín",
    apellido: "González",
    fechaNacimiento: new Date("1970-05-05"),
    telefono: "1112345681",
    mail: "MartinGonz@gmail.com.ar",
    direccion: "Aviador Patallo 2148",
    nroAfiliado: "10001-03",
    parentesco: "Cónyuge",
    planMedico: "Plata"
  },
  {
    tipoDocumento: "DNI",
    dni: "42504601",
    nombre: "Jorge",
    apellido: "Pérez",
    fechaNacimiento: new Date("2001-05-05"),
    telefono: "1112345121",
    mail: "JorgeP@gmail.com.ar",
    direccion: "Aviador Mellman 2074",
    nroAfiliado: "10002-01",
    parentesco: "Titular",
    planMedico: "Oro"
  },
]

async function seedPacientes() {
    
    try {
        await Paciente.deleteMany({})
        await Paciente.insertMany(pacientes)
    } catch (error) {
        console.log('Error al insertar los pacientes', error.message)
    }
}


module.exports = {seedPacientes}