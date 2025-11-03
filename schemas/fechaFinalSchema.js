const Joi = require('joi');

const fechaFinalSchema = Joi.object({
    fechaFin: Joi.date().allow(null).messages({
        'date.base': 'La fecha de finalización debe ser una fecha válida o indefinida'
    })
    });

module.exports = fechaFinalSchema;