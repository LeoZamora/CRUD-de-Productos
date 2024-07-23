import Productos from '../models/producto.model.js'
import TipoEmpaque from '../models/tipoEmpaque.js'
import { filters } from '../filters/filtros.js';

export const GetEmp = async(req, res) =>{
    const queryParams = {
        page: parseInt(req.query.page) || 1,
        limit: req.query.limit ? parseInt(req.query.limit) : 10,
        Nombre: req.query.Nombre || ''
    }

    try {
        const filter = await filters.getTipoEmp(queryParams.limit, queryParams.page, queryParams.Nombre);

        res.json({
            ok: true,
            filter
        })
    } catch (error) {
        res.status(500).json({error: 'Error al solicitar la peticion'});
    }
}

export const PostEmp =  async (req, res) =>{
    const {Codigo,Nombre, Descripcion, Estado} = req.body;

    try {  
        const nuevEmpaque = await TipoEmpaque.create({
            Codigo,
            Nombre,
            Descripcion,
            Estado
        });
        res.json(nuevEmpaque);     
    } catch (error) {
        res.status(500).json({error: 'Error interno del servidor'})
    }
}

export const GET = async (req, res)=>{
    const queryParams = {
        page: parseInt(req.query.page) || 1,
        limit: req.query.limit ? parseInt(req.query.limit):10,
        nombre: req.query.nombre || ''
    }

    try {
        const filter = await filters.getProducto(queryParams.limit, queryParams.page, queryParams.nombre)

        res.json({
            ok: true,
            filter
        })

    } catch (error) {
        console.error(error);
    }
}

export const POST = async (req, res) =>{
    console.log(req.body);
    const {Nombre, Precio, Descripcion,fk_id_Empaque,Codigo,fk_id_Cat} = req.body;
    
    console.log('Datos', Nombre, Precio, Descripcion);

    console.log('Tipos de datos:', {
        Nombre: typeof Nombre,
        Precio: typeof Precio,
        Descripcion: typeof Descripcion,
        fk_id_Empaque: typeof fk_id_Empaque,
        Codigo: typeof Codigo,
        fk_id_Cat: typeof fk_id_Cat
    });

        try{          
            const nuevoProducto = await Productos.create({
                Nombre,
                Precio, 
                Descripcion,
                fk_id_Empaque,
                Codigo,
                fk_id_Cat
            });

            res.status(201).json(nuevoProducto);
        } catch (error) {
            res.status(500).json({ error: 'Error interno del servidor' });
        }
}

export const DELETE = async (req, res) =>{
    try {
        const Id = parseInt(req.query.id);

        const deleteProducto = await Productos.findByPk(Id);

        await deleteProducto.destroy();
        res.json({message: 'Producto eliminado'})

    } catch (error) {
        res.status(500).json({ error: 'Error interno del servidor' });
    }
}

export const PUT = async (req, res) =>{
    const Id = parseInt(req.query.id);
    const { Nombre, Precio, Descripcion/*,fk_id_Empaque,Codigo,fk_id_Cat*/} = req.body;

        try {
            let updateProducto = await Productos.findByPk(Id)
            updateProducto.Nombre = Nombre,
            updateProducto.Precio = Precio,
            updateProducto.Descripcion = Descripcion,
            // updateProducto.fk_id_Empaque = fk_id_Empaque,
            // updateProducto.Codigo = Codigo,
            // updateProducto.fk_id_Cat = fk_id_Cat,
    
            await updateProducto.save();
    
            res.status(201).json(updateProducto);
        } catch (error) {
            res.status(500).json({ error: 'Error interno del servidor' });
        }
}

export const getCategoria = async (req, res) => {
    const params = {
        page: parseInt(req.query.page) || 1,
        limit: req.query.limit ? parseInt(req.query.limit):5,
        Nombre: req.query.Nombre || ''
    }

    try {
        const filter = await filters.getCategoria(params.limit, params.page, params.Nombre);

        res.json({
            ok: true,
            filter
        })
    } catch (error) {
        console.log(error);
    }
}

export const methods = {
    GET,
    POST,
    DELETE,
    PUT,
    PostEmp,
    GetEmp,
    getCategoria
}