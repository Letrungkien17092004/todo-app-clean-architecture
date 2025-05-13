import Todo from "src/entities/Todo";

export default interface ITodoUseCase {
    createTodo(newTodo: Todo): Promise<Todo>;
    updateTodo(todo: Todo): Promise<Todo>;
    
}