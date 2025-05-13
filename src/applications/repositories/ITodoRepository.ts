import Todo from '../entities/Todo.js';

export default interface ITodoRepository {
    getAllTodos(): Promise<Todo[]>;
    getTodoById(id: string): Promise<Todo | null>;
    createTodo(todo: Todo): Promise<Todo>;
    updateTodo(id: string, todo: Partial<Todo>): Promise<Todo | null>;
    deleteTodo(id: string): Promise<void>;
}