import ITodoRepository from "src/core/applications/repositories/ITodoRepository.js";
import Todo from "src/core/entities/Todo.js"
import { TodoModel } from "../models/index.js";

export default class TodoRepoPostgres implements ITodoRepository {
    async getAllTodos(): Promise<Todo[]> {
        try {
            const todos: Todo[] = (await TodoModel.findAll()).map(t => {
                return new Todo({id: t.id, title: t.title, description: t.description, completed: t.completed})
            })
            return todos

        } catch (error) {
            throw new Error("DB Error")
        }
    }

    async getTodoById(id: string): Promise<Todo | null> {
        throw new Error("No code")
    }

    async createTodo(newTodo: Todo): Promise<Todo> {
        throw new Error("No code")
    }

    async updateTodo(todo: Todo): Promise<Todo | null> {
        throw new Error("No code")

    }

    async deleteTodo(id: string): Promise<void> {
        throw new Error("No code")
    }
}