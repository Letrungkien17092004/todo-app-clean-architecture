import Todo from "src/core/entities/Todo.js";
import ITodoUsecase from "../interfaces/ITodoUseCase.js";
import ITodoRepository from "../repositories/ITodoRepository.js";

export class TodoUsecase implements ITodoUsecase {
    private _todoRepo: ITodoRepository;

    constructor(todoRepository: ITodoRepository) {
        this._todoRepo = todoRepository;
    }

    async createTodo(newTodo: Todo): Promise<Todo> {
        return await this._todoRepo.createTodo(newTodo);
    }

    async updateTodo(todo: Todo): Promise<Todo | null> {
        return await this._todoRepo.updateTodo(todo);
    }

    async deleteById(id: string): Promise<void> {
        return await this._todoRepo.deleteTodo(id);
    }

    async getAllTodos(): Promise<Todo[]> {
        return await this._todoRepo.getAllTodos();
    }
}