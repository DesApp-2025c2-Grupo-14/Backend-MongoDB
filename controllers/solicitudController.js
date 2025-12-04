const Solicitud = require("../models/solicitud");
const Prestador = require("../models/prestador");
const mongoose = require("mongoose");
const dayjs = require("dayjs");
const {
  fnSolicitudesPrestador,
  fnEstadisticasPrestador,
} = require("../services/solicitud.service");

const obtenerSolicitudesPendientes = async (req, res) => {
  try {
    const { tipo, desde, hasta } = req.query; // todos opcionales
    const match = { estado: "Pendiente" };

    // --- Filtro opcional por tipo ---
    if (tipo) {
      match.tipo = tipo; // Ej: "Reintegro" | "Autorizacion" | "Receta"
    }
    if (desde || hasta) {
      match.fechaPrestacion = {};

      if (desde) {
        match.fechaPrestacion.$gte = dayjs(desde).startOf("day").toDate();
      }

      if (hasta) {
        match.fechaPrestacion.$lte = dayjs(hasta).endOf("day").toDate();
      }
    }

    const solicitudes = await Solicitud.aggregate([
      { $match: match },
      {
        $lookup: {
          from: "pacientes",
          localField: "pacienteId",
          foreignField: "_id",
          as: "paciente",
        },
      },
      { $unwind: "$paciente" },
      {
        $project: {
          "paciente._id": 0,
          "paciente.edad": 0,
          "paciente.nroAfiliado": 0,
          "paciente.situacionesTerapeuticas": 0,
          "paciente.familia": 0,
          "paciente.historialClinico": 0,
        },
      },
    ]);

    res.status(200).json(solicitudes);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error interno del servidor." });
  }
};

const getDetalleById = async (req, res) => {
  const _id = new mongoose.Types.ObjectId(req.params.id);
  const tipo =
    req.params.tipo === "Reintegro"
      ? "reintegros"
      : req.params.tipo === "Autorizacion"
      ? "autorizaciones"
      : "recetas";
  const alias =
    tipo === "reintegros"
      ? "reintegro"
      : tipo === "autorizaciones"
      ? "autorizacion"
      : "receta";
  try {
    const detalle = await Solicitud.aggregate([
      {
        $match: { _id },
      },
      {
        $lookup: {
          from: tipo,
          localField: "_id",
          foreignField: "solicitudId",
          as: alias,
        },
      },
      { $unwind: { path: `$${alias}` } },
      {
        $lookup: {
          from: "pacientes",
          localField: "pacienteId",
          foreignField: "_id",
          as: "paciente",
        },
      },
      {
        $unwind: "$paciente",
      },
      {
        $project: {
          "paciente._id": 0,
          "paciente.edad": 0,
          "paciente.nroAfiliado": 0,
          "paciente.situacionesTerapeuticas": 0,
          "paciente.familia": 0,
          "paciente.historialClinico": 0,
          "solicitud.pacienteId": 0,
        },
      },
    ]);

    if (!detalle)
      return res.status(404).json({ message: "Detalle no encontrado." });
    res.status(200).json(detalle[0]);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error interno del servidor." });
  }
};

const getSolicitudesPrestador = async (req, res) => {
  const { id, tipo, desde, hasta } = req.query;

  try {
    const solicitudes = await fnSolicitudesPrestador(id, tipo, desde, hasta);

    if (!solicitudes)
      return res.status(404).json({ message: "Solicitudes no encontradas." });
    res.status(200).json(solicitudes);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error interno del servidor." });
  }
};

const actualizarSolicitud = async (req, res) => {
  try {
    const prestador= await Prestador.findById(req.body.prestadorId);
    const solicitud = await Solicitud.findByIdAndUpdate(
      { _id: req.params.id },
      {
        estado: req.body.estado,
        motivo: req.body.motivo ?? "",
        prestadorId: new mongoose.Types.ObjectId(req.body.prestadorId),
        medico: prestador.nombre,
      },
      { new: true }
    );
    res.status(200).json(solicitud);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

const getEstadisticasPrestador = async (req, res) => {
  const { prestadorId, tipo, desde, hasta } = req.query;
  try {
    const resumen = await fnEstadisticasPrestador(
      prestadorId,
      tipo,
      desde,
      hasta
    );

    res.status(200).json(resumen);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

const getPrestadorId = async (req, res) => {
  try {
    const prestadores = await Prestador.find();
    console.log(prestadores);
    res.status(200).json({ id: prestadores[0]._id });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

const getSolicitudesCentroMedico = async (req, res) => {
  const { id, tipo, desde, hasta } = req.query;

  try {
    const prestadores = await Prestador.find({
      centroMedicoId: new mongoose.Types.ObjectId(id),
    });

    const solicitudesPorPrestador = await Promise.all(
      prestadores.map((p) => fnSolicitudesPrestador(p._id, tipo, desde, hasta))
    );

    const solicitudesCentro = await fnSolicitudesPrestador(
      id,
      tipo,
      desde,
      hasta
    );
    const solicitudes = solicitudesPorPrestador.flat();
    const resultado = [...solicitudes, solicitudesCentro];

    if (!solicitudes)
      return res.status(404).json({ message: "Solicitudes no encontradas." });
    res.status(200).json(resultado.flat());
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

const getEstadisticasCentroMedico = async (req, res) => {
  const { prestadorId, tipo, desde, hasta } = req.query;
  try {
    const prestadores = await Prestador.find({
      centroMedicoId: new mongoose.Types.ObjectId(prestadorId),
    });

    const estadisticasPorPrestador = await Promise.all(
      prestadores.map((p) => fnEstadisticasPrestador(p._id, tipo, desde, hasta))
    );

    const estadisticasCentro = await fnEstadisticasPrestador(
      prestadorId,
      tipo,
      desde,
      hasta
    );

    const estadisticas = estadisticasPorPrestador.flat().reduce(
      (acc, item) => {
        acc.total += item.total;
        acc.aprobadas += item.aprobadas;
        acc.rechazadas += item.rechazadas;
        acc.observadas += item.observadas;

        return acc;
      },
      {
        total: estadisticasCentro.total,
        aprobadas: estadisticasCentro.aprobadas,
        rechazadas: estadisticasCentro.rechazadas,
        observadas: estadisticasCentro.observadas,
      }
    );

    if (!estadisticasPorPrestador)
      return res.status(404).json({ message: "Estadisticas no encontradas." });
    res.status(200).json(estadisticas);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  obtenerSolicitudesPendientes,
  getDetalleById,
  actualizarSolicitud,
  getSolicitudesPrestador,
  getEstadisticasPrestador,
  getPrestadorId,
  getSolicitudesCentroMedico,
  getEstadisticasCentroMedico,
};
