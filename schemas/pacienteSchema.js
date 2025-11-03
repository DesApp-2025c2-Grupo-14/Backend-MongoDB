const Joi = require('joi');

 
const pacienteSchema = Joi.object({
    tipoDocumento: Joi.string().valid('DNI', 'Pasaporte', 'Libreta Cívica', 'Libreta de Enrolamiento')
    .required()
    .messages({
        'any.only': 'El tipo de documento debe ser uno válido (DNI, Pasaporte, Libreta Cívica o Libreta de Enrolamiento)',
        'string.empty': 'El tipo de documento es obligatorio'
    }),

    dni: Joi.string()
    .pattern(/^\d{7,8}$/)
    .required()
    .messages({
        'string.pattern.base': 'El DNI debe contener 7 u 8 dígitos numéricos',
        'string.empty': 'El DNI es obligatorio'
    }),

    nombre: Joi.string().min(2).max(20).required().messages({
    'string.empty': 'El nombre no puede estar vacío',
    'string.min': 'El nombre debe tener al menos 2 caracteres',
    'string.max' : 'El nombre debe tener como maximo 20 caracteres'
    }),

    apellido: Joi.string().min(2).max(30).required().messages({
    'string.empty': 'El apellido no puede estar vacío',
    'string.min': 'El apellido debe tener al menos 2 caracteres',
    'string.max' : 'El apellido debe tener como maximo 30 caracteres'
    }),

    fechaNacimiento: Joi.date().required().messages({
    'date.base': 'La fecha de nacimiento debe ser válida',
    'any.required': 'La fecha de nacimiento es obligatoria'
    }),

    telefono: Joi.string()
    .pattern(/^\+?\d{6,15}$/)
    .required()
    .messages({
        'string.pattern.base': 'El teléfono debe ser un número válido (entre 6 y 15 dígitos)',
        'string.empty': 'El teléfono es obligatorio'
    }),

    mail: Joi.string().email().required().messages({
    'string.email': 'El correo electrónico debe tener un formato válido',
    'string.empty': 'El correo electrónico es obligatorio'
    }),

    direccion: Joi.string().min(3).required().messages({
    'string.empty': 'La dirección no puede estar vacía',
    'string.min': 'La dirección debe tener al menos 3 caracteres'
    }),

    nroAfiliado: Joi.string().min(3).required().messages({
    'string.empty': 'El número de afiliado no puede estar vacío',
    'string.min': 'El número de afiliado debe tener al menos 3 caracteres'
    }),

    parentesco: Joi.string()
    .valid('Titular', 'Cónyuge', 'Hijo', 'Hija', 'Familiar a cargo')
    .required()
    .messages({
        'any.only': 'El parentesco debe ser uno de: Titular, Cónyuge, Hijo, Hija o Familiar a cargo',
        'string.empty': 'El parentesco es obligatorio'
    }),

    planMedico: Joi.string()
    .valid('210', '310', '410', '510', 'Bronce', 'Plata', 'Oro', 'Platino')
    .required()
    .messages({
        'any.only': 'El plan médico debe ser uno válido (210, 310, 410, 510, Bronce, Plata, Oro o Platino)',
        'string.empty': 'El plan médico es obligatorio'
    }),

  // relaciones 
    situacionesTerapeuticas: Joi.array()
        .items(Joi.string().regex(/^[0-9a-fA-F]{24}$/))
        .optional()
        .messages({
            'string.pattern.base': 'Cada ID de situación terapéutica debe ser un ObjectId válido'
        }),

    familia: Joi.array()
        .items(Joi.string().regex(/^[0-9a-fA-F]{24}$/))
        .optional()
        .messages({
            'string.pattern.base': 'Cada ID de familiar debe ser un ObjectId válido'
        }),

    historialClinico: Joi.array()
        .items(Joi.string().regex(/^[0-9a-fA-F]{24}$/))
        .optional()
        .messages({
            
        })
});

module.exports = pacienteSchema;