import { conn } from "../infras/sequelize/index.js"


(async () => {
    try {
        await conn.authenticate()
        console.log("connection succesfully")
    } catch (error) {
        console.error("connection error", error)
    }
})()