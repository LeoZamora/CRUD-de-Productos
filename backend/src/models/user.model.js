import { DataTypes } from "sequelize";
import { sequelize } from "../db/connection_sql.js";

const User = sequelize.define('User', {
    Id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        field: 'Id'
    },
    user: DataTypes.STRING,
    password: DataTypes.STRING
}, {
    tableName: 'mstusuario',
    timestamps: false
})

export default User;