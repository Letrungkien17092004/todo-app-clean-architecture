import Todo from "src/core/entities/Todo.js";
import ITodoRepository from "../repositories/ITodoRepository.js";

export default interface ITodoUsecase {
    createTodo(newTodo: Todo): Promise<Todo>;
    updateTodo(id: number, todo: Todo): Promise<Todo | null>;
    deleteById(id: number): Promise<boolean>;
    getAllTodos(): Promise<Todo[]>;
    
}