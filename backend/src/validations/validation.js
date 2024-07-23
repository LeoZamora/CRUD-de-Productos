import { body, param, query } from "express-validator";
import { validation } from "../helpers/validator.js";
import Productos from "../models/producto.model.js";
import TipoEmpaque from "../models/tipoEmpaque.js";

const paramLimit = async (value, {req}) =>{
    if (req.query.limit) {
        if (!isNaN(value)) {
            return true;
        }
        throw new Error('limite deberia ser numerico');
    }
    return true
}

const paramPage = async (value, {req}) =>{
    if (req.query.page) {
        if (!isNaN(value)) {
            return true;
        }
        throw new Error('page deberia ser numerico');
    }
    return true
}

const paramsValidator = [
    query('limit')
    .custom(paramLimit),
    query('page')
    .custom(paramPage),
    (req, res, next) => {
        validation(req, res, next)
    }
]

export const postValidation = [
    body('Nombre', 'Ingrese un nombre de producto')
        .exists()
        .isLength({min: 5}),
    body('Precio', 'Ingrese un precio de produto')
        .isFloat(),
    body('Descripcion', 'Ingrese una descripcion del producto')
        .exists()
        .isLength({min: 10}),
    body('fk_id_Empaque', 'Ingrese fk de Tipo de Empaque')
        .isNumeric(),
    body('Codigo', 'Ingrese un codigo de producto')
        .isNumeric(),
    body('fk_id_Cat', 'Ingrese un fk de la categoria')
        .isNumeric(),
    (req, res, next) => {
        validation(req, res, next);
    }
]

const idTipoEmp = async (value) => {
    if(!value){
        throw new Error('El id del tipo de empaque es requerido')
    }
    
    const idEmp = await TipoEmpaque.findOne({where: {Id: value}});

    if (!idEmp) {
        throw new Error('Id del tipo de empaque no existe');
    }
    return true;
}

export const putValidation = [
    query('id', 'Id no encontrado en la DB')
    .exists()
    .isInt(),
    body('Nombre', 'Ingrese un nombre de producto')
    .exists()
    .isLength({min: 5}),
    body('Precio', 'Ingrese un precio para actualizar')
    .exists()
    .isNumeric(),
    body('Descripcion', 'Ingrese una descripcion del producto')
    .exists()
    .isLength({max: 250}),
    // body('fk_id_Empaque', 'Id invalido')
    // .exists()
    // .isInt()
    // .custom(idTipoEmp),
    // body('Codigo', 'Ingrese un codigo de producto')
    // .exists()
    // .isLength({min: 2}),
    // body('fk_id_Cat', 'Ingrese un fk de la categoria')
    // .isNumeric(),
    (req, res, next) => {
        validation(req, res, next);
    }
]

const idProductoExistente = async (value) => {
    if (!value) {
      throw new Error('El ID del producto es requerido');
    }
  
    const producto = await Productos.findOne({ where: { Id: value } });
  
    if (!producto) {
      throw new Error('El producto con el ID especificado no existe');
    }
    return true;
}

export const deleteValidation = [
    query('id', 'Id invalido')
    .isInt()
    .custom(idProductoExistente),
    (req, res, next) => {
        validation(req, res, next);
    }
]

export const authValidation = [
    body('user', 'Usuario invalido')
    .exists()
    .isLength({min: 5}),
    body('password', 'Password invalido')
    .exists()
    .isLength({min: 5}),
    (req, res, next) => {
        validation(req, res, next)
    }
]

export const postEmpValidation = [
    body('Nombre', 'Nombre del tipo de empaque invalido')
    .exists()
    .isLength({min: 4}),
    body('Codigo', 'Ingrese un codigo de tipo de empaque')
    .isNumeric(),
    body('Descripcion', 'Descripcion Invalida')
    .exists()
    .isLength({min: 10}),
    body('Estado', 'Ingrese el estado del tipo de empaque')
    .exists()
    .isLength({min: 5}),
    (req, res, next) => {
        validation(req, res, next)
    }
]

export const postUserValidation = [
    body('user', 'Ingrese un usuario valido')
    .exists()
    .isLength({min: 5}),
    body('password', 'Ingrese una contraseña')
    .exists()
    .isLength({min: 5}),
    (req, res, next) => {
        validation(req, res, next)
    }
]

export const validations = {
    postValidation,
    putValidation,
    deleteValidation,
    authValidation,
    postEmpValidation,
    paramsValidator,
    postUserValidation
}