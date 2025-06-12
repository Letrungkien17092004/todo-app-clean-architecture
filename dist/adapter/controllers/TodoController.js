var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import TodoMapper from "../mappers/TodoMapper.js";
export default class TodoController {
    constructor(todoUsecase) {
        this._todoUsecase = todoUsecase;
    }
    /**
     * Create todo controller
     * @param req
     * @param res
     */
    createTodo(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let { title } = req.body;
                if (!title) {
                    throw new Error("Invalid input");
                }
                const todo = yield this._todoUsecase.createTodo(TodoMapper.toInput(req));
                res.status(200).json(TodoMapper.toOutput(todo));
            }
            catch (error) {
                console.error(error);
                res.status(500).json({
                    message: "Error!"
                });
            }
        });
    }
    /**
     * Update todo controller
     * @param req
     * @param res
     * @returns
     */
    updateTodo(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let { id, title, completed } = req.body;
                const isValid = id && title && completed;
                if (!isValid) {
                    throw new Error("Invalid input");
                }
                const todo = yield this._todoUsecase.updateTodo(TodoMapper.toInput(req));
                if (todo) {
                    res.status(200).json(TodoMapper.toOutput(todo));
                    return;
                }
                res.status(404).json({
                    message: "Todo was not found"
                });
            }
            catch (error) {
                res.status(500).json({
                    message: "Error!"
                });
            }
        });
    }
    /**
     * Delete todo by id controller
     * @param req
     * @param res
     */
    deleteById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let { id } = req.body;
                if (!id) {
                    throw new Error("Invalid input");
                }
                yield this._todoUsecase.deleteById(id);
                res.status(200).json({
                    message: "Delete successfully"
                });
            }
            catch (error) {
                res.status(500).json({
                    message: "Error!"
                });
            }
        });
    }
    /**
     * Find all todo controller
     * @param _
     * @param res
     */
    getAllTodos(_, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const todos = yield this._todoUsecase.getAllTodos();
                res.status(200).json({
                    todos: todos.map(t => TodoMapper.toOutput(t))
                });
            }
            catch (error) {
                res.status(500).json({
                    message: "Error!"
                });
            }
        });
    }
}
