const Joi = require('joi');

const situacionSchema = Joi.object({
  titulo: Joi.string().min(2).required().messages({
    'string.empty': 'El título no puede estar vacío',
    'string.min': 'El título debe tener al menos 2 caracteres'
  }),
  descripcion: Joi.string().min(2).required().messages({
    'string.empty': 'La descripción no puede estar vacía',
    'string.min': 'La descripción debe tener al menos 2 caracteres'
  }),
  fechaInicio: Joi.date().required().messages({
    'date.base': 'La fecha de inicio debe ser una fecha válida',
    'any.required': 'La fecha de inicio es obligatoria'
  }),
  fechaFin: Joi.date().allow(null).optional().messages({
    'date.base': 'La fecha de finalización debe ser una fecha válida o no definida'
  }),
  pacienteId: Joi.string().regex(/^[0-9a-fA-F]{24}$/).required().messages({
    'string.pattern.base': 'El ID del paciente no es válido'
  })
});

module.exports = situacionSchema;