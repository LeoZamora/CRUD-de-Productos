import { DataTypes } from "sequelize";
import { sequelize } from "../db/connection_sql.js";

const TipoEmpaque = sequelize.define('TipoEmpaque', {
    Id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        field: 'Id'
    },
    Codigo: DataTypes.INTEGER,
    Nombre: DataTypes.STRING,
    Descripcion: DataTypes.STRING,
    Estado: DataTypes.STRING
}, {
    tableName: 'tipo_empaque',
    timestamps: false
})

export default TipoEmpaque;