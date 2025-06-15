import { Router } from "express";
import { TodoUsecase } from "src/core/applications/useCases/TodoUsecase.js";
import { TodoRepoPostgres } from "src/infras/sequelize/index.js";
import TodoController from '../../../adapter/controllers/TodoController.js';

const todoRepo = new TodoRepoPostgres()
const todoUsecase = new TodoUsecase(todoRepo)
const todoController = new TodoController(todoUsecase)

const todoRouter = Router()

todoRouter.get('/', todoController.getAllTodos)
todoRouter.post("/", todoController.createTodo)
todoRouter.put("/:id", todoController.updateTodo)
todoRouter.delete("/:id", todoController.deleteById)

export default todoRouter