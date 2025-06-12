import { conn } from "../conn.config.js";
import { DataTypes, Model } from 'sequelize';
export default class Todo extends Model {
}
Todo.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    title: {
        type: new DataTypes.STRING(255),
        allowNull: false
    },
    description: {
        type: new DataTypes.STRING(255),
        allowNull: true
    }
}, {
    sequelize: conn,
});
