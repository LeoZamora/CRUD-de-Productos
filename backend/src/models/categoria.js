import { DataTypes } from "sequelize";
import { sequelize } from "../db/connection_sql.js";

const Categoria = sequelize.define('Categoria', {
    Id_Cat: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        field: "Id_Cat"
    },
    Nombre_Categoria: {
        type: DataTypes.STRING,
        field: 'Nombre_Categoria'
    },
    Descripcion: {
        type: DataTypes.STRING,
        field: 'Descripcion'
    },
    fk_id_SubCat: {
        type: DataTypes.INTEGER,
        field: "fk_id_SubCat"
    },
    fk_id_Marca: {
        type: DataTypes.INTEGER,
        field: 'fk_id_Marca'
    }
}, {
    tableName: 'Categoria',
    timestamps: false
}
);

export default Categoria;