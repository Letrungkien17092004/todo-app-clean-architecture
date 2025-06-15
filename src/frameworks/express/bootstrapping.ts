import express, { Express } from "express";
import bodyParser from "body-parser";
import todoRouter from "./routers/TodoRouter";

const app: Express = express()

app.use(bodyParser.json())
app.use("/api", todoRouter)


export default app

