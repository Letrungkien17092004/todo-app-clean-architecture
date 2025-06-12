import { Sequelize } from "sequelize";


export const sequelize = new Sequelize({
    username: "postgres",
    password: "12345678",
    dialect: "postgres",
    host: "localhost",
    port: 5432,
    database: "todo-clean-architecture",
});

