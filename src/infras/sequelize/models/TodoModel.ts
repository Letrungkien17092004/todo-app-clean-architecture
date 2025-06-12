import { sequelize } from "../sequelize.config.js"
import { DataTypes, Model, InferAttributes, InferCreationAttributes, CreationOptional } from 'sequelize'

export default class TodoModel extends Model<InferAttributes<TodoModel>, InferCreationAttributes<TodoModel>> {

    declare id: number | null;
    declare title: string;
    declare description: string | null;
    declare completed: boolean
}

TodoModel.init(
    {
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
        },

        completed: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        }
    },
    {
        sequelize: sequelize,
    }
)

