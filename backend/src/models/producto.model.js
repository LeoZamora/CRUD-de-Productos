import { DataTypes } from "sequelize";
import { sequelize } from "../db/connection_sql.js";

const Productos = sequelize.define('Productos', {
    Id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        field: 'Id'
    },
    Nombre: {
        type: DataTypes.STRING,
        field: 'Nombre'
    },
    Precio: {
        type: DataTypes.FLOAT,
        field: 'Precio'
    },
    Descripcion: {
        type: DataTypes.STRING,
        field: 'Descripcion'
    },
    fk_id_Empaque: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        autoIncrement: false,
        field: 'fk_id_Empaque'
    },
    Codigo: {
       type: DataTypes.INTEGER,
       field: 'Codigo'
    },
    fk_id_Cat: {
        type: DataTypes.INTEGER,
        field: 'fk_id_Cat'

    }
}, {
    tableName: 'productos',
    timestamps: false
})

export default Productos;