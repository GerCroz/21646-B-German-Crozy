import { DataTypes } from "sequelize";
import { sequelize } from "../config/database.js";

export const PostModel = sequelize.define("post", { 
    title: {
        type: DataTypes.STRING, 
        allowNull: false
    },
    content:{
        type: DataTypes.STRING,
        allowNull: false
    }, 
    link: {
        type: DataTypes.STRING,
        allowNull: false
    },
},
{
    timestamps: true
})