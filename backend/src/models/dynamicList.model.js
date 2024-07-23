import { sequelize } from "../db/connection_sql.js";
import { DataTypes } from "sequelize";

 export const dynamicList = sequelize.define('Menu_Dinamico', {
    Id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: false,
        field: 'Id'
    },
    Name_List: {
        type: DataTypes.STRING,
        field: 'Name_List'
    },
    Estado: {
        type: DataTypes.BOOLEAN,
        field: 'Estado'
    }
}, {
    tableName: 'Menu_Dinamico',
    timestamps: false
})