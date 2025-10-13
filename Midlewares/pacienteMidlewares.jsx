const User = require('../models/paciente')


const validUser = async (req, res, next) => {
    const { id } = req.params;
    if (!id) {
        return res.status(400).json({ message: 'ID inválido' });
    }
    const user = await User.findById(id);
    if (!user) {
        return res.status(404).json({ message: 'Usuario no encontrado' });
    }
    next();
};

const validNombre = async (req, res, next) => {
    const { nombre } = req.body;
    if (!nickName) {
        return res.status(400).json({ message: 'El nombre es requerido' });
    }
    const existeNick = await User.findOne({ nickName: nickName.trim() });
    if (existeNick) {
        return res.status(401).json({ message: 'El nombre ya existe' });
    }
    next();
};
const validEdad = async (req, res, next) => {
    const { edad } = req.body;
    if (edad > 0 && edad <120) {
        next();
    } else {
    return res.status(404).json({ message: 'La edad debe ser mayor a 0 y menor a 120' });
    }
};
const validNroAfiliado = async (req,res,next) => {
    const {nroAfiliado} = req.body;
    if (nroAfiliado.length < 6 || nroAfiliado.length > 8 ){
        return res.status(401).json({message: 'El numero de afiliado debe contener como minimo 6 y maximo 8'})
    }
    next();
}
const validEmail = async (req, res, next) => {
    const { email } = req.body;
    if (!email) {
        return res.status(400).json({ message: 'El email es requerido' });
    }
    const existeEmail = await User.findOne({ email: email.trim() });
    if (existeEmail) {
        return res.status(409).json({ message: 'El email ya se encuentra registrado' });
    }
    next();
};
*/
const validationSchemma = (schema) =>{
    return (req, res, next) =>{
        const {error, _} = schema.validate(req.body, {abortEarly:false})
        if(error){
            return res.status(400).json(error)
        }
        next()
    }
}
/*
const validationEmailSchema = (schema) =>{
    return (req, res, next) =>{
        const {error, _} = schema.validate(req.body, {abortEarly:false})
        if(error){
            return res.status(400).json(error)
        }
        next()
    }
}
*/


module.exports = {validUser,validNombre,validEdad,validNroAfiliado, validationSchemma, validEmail} 