import Todo from '../../entities/Todo.js';

export default interface ITodoRepository {
    getAllTodos(): Promise<Todo[]>;
    getTodoById(id: number): Promise<Todo | null>;
    createTodo(newTodo: Todo): Promise<Todo>;
    updateTodo(id: number, todo: Todo): Promise<Todo | null>;
    deleteTodo(id: number): Promise<boolean>;
}