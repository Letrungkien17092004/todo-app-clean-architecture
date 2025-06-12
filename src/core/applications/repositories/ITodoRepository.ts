import Todo from '../../entities/Todo.js';

export default interface ITodoRepository {
    getAllTodos(): Promise<Todo[]>;
    getTodoById(id: string): Promise<Todo | null>;
    createTodo(newTodo: Todo): Promise<Todo>;
    updateTodo(todo: Todo): Promise<Todo | null>;
    deleteTodo(id: string): Promise<void>;
}