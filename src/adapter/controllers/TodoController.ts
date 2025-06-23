import { TodoUsecase } from "src/core/applications/useCases/TodoUsecase.js";
import { Request, Response } from "express";
import TodoMapper from "../mappers/TodoMapper.js";

export default class TodoController {
    private _todoUsecase: TodoUsecase;

    constructor(todoUsecase: TodoUsecase) {
        this._todoUsecase = todoUsecase;
        this.createTodo = this.createTodo.bind(this);
        this.updateTodo = this.updateTodo.bind(this);
        this.deleteById = this.deleteById.bind(this);
        this.getAllTodos = this.getAllTodos.bind(this);
    }

    /**
     * Create todo controller
     * @param req 
     * @param res 
     */
    async createTodo(req: Request, res: Response): Promise<void> {
        try {
            let { title } = req.body;
            if (!title) {
                throw new Error("Invalid input");
            }
            const todo = await this._todoUsecase.createTodo(TodoMapper.ReqBodytoInput(req));
            res.status(200).json(TodoMapper.toOutput(todo));

        } catch (error) {
            console.error(error);
            res.status(500).json({
                message: "Error!"
            });
        }
    }

    /**
     * Find all todo controller
     * @param _ 
     * @param res 
     */
    async getAllTodos(_: Request, res: Response): Promise<void> {
        try {
            const todos = await this._todoUsecase.getAllTodos();
            res.status(200).json({
                todos: todos.map(t => TodoMapper.toOutput(t))
            })

        } catch (error) {
            console.log(error)
            res.status(500).json({
                message: "Error!"
            })
        }
    }

    /**
     * Update todo controller
     * @param req 
     * @param res 
     * @returns 
     */
    async updateTodo(req: Request, res: Response): Promise<void> {
        try {
            let { id, title, completed } = req.body;
            const isValid: boolean = id && title && completed

            if (!isValid) {
                throw new Error("Invalid input")
            }
            const todo = await this._todoUsecase.updateTodo(id, TodoMapper.ReqBodytoInput(req));

            if (todo) {
                res.status(200).json(TodoMapper.toOutput(todo));
                return;
            }
            res.status(404).json({
                message: "Todo was not found"
            })

        } catch (error) {
            res.status(500).json({
                message: "Error!"
            })
        }
    }

    /**
     * Delete todo by id controller
     * @param req
     * @param res
     */
    async deleteById(req: Request, res: Response): Promise<void> {
        try {
            let { id } = req.body;
            if (!id) {
                throw new Error("Invalid input");
            }

            await this._todoUsecase.deleteById(id);
            res.status(200).json({
                message: "Delete successfully"
            });

        } catch (error) {
            res.status(500).json({
                message: "Error!"
            });
        }
    }
}