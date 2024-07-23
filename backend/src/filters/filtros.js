import { Op } from 'sequelize';
import TipoEmpaque from "../models/tipoEmpaque.js";
import Productos from "../models/producto.model.js";
import Categoria from "../models/categoria.js"

const getTipoEmp = async (limit, page, name) =>{
    const offset = (page -1)* limit;
    const options = {
        limit: limit,
        offset: offset
    }
    if (name) {
        options.where = {
            Nombre: {
                [Op.like]: `${name}`
                }
            }
        }
    const result = await TipoEmpaque.findAndCountAll(options)
    const pages = Math.ceil(result.count/limit);

    return {            
        page: page,
        limit: limit,
        totalPages: pages,
        totalProductos: result.count,
        result: result.rows
    }
}

const getProducto = async (limit, page, name) =>{
    const offset = (page -1)*limit;
    const options = {
        limit: limit,
        offset: offset
    }
    if (name) {
        options.where = {
            Nombre: {
                [Op.like]: `${name}`
            }
        }
    };

    const result = await Productos.findAndCountAll(options);
    const pages = Math.ceil(result.count/limit);

    return {
        page: page,
        limit: limit,
        totalPages: pages,
        totalProductos: result.count,
        result: result.rows
    }
}

const getCategoria = async(limit, page, name) => {
    const offset = (page - 1)*limit;
    const options = {
        limit: limit,
        offset: offset
    }

    if (name) {
        options.where = {
            Nombre_Categoria: {
                [Op.like]: `${name}`
            }
        }
    }

    const result = await Categoria.findAndCountAll(options);
    const pages = Math.ceil(result.count/limit);

    return {
        page: page,
        limit: limit,
        totalPages: pages,
        totalCategorias: result.count,
        result: result.rows
    }
}

export const filters = {
    getProducto,
    getTipoEmp,
    getCategoria
}