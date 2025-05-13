import Todo from "src/entities/Todo.js";
import ITodoRepository from "../repositories/ITodoRepository.js";

export default interface ITodoUsecase {
    createTodo(newTodo: Todo): Promise<Todo>;
    updateTodo(todo: Todo): Promise<Todo | null>;
    deleteById(id: string): Promise<void>;
    getAllTodos(): Promise<Todo[]>;
    
}