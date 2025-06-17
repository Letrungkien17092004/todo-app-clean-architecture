import ITodoRepository from "src/core/applications/repositories/ITodoRepository.js";
import Todo from "src/core/entities/Todo.js";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()
export default class TodoRepoPostgres implements ITodoRepository {
    async getAllTodos(): Promise<Todo[]> {
        try {
            const allTodos = await prisma.todos.findMany()

            const todoEntities = allTodos.map((todo) => {
                return new Todo({
                    id: todo.id,
                    title: todo.title,
                    description: todo.description,
                    completed: todo.completed
                })
            })

            return todoEntities
        } catch (error) {
            throw new Error("DB Error!");
        }
    }


    async getTodoById(id: number): Promise<Todo | null> {
        try {
            const todo = await prisma.todos.findUnique({
                where: {
                    id: id
                }
            })

            if (todo) {
                return new Todo({
                    id: todo.id,
                    title: todo.title,
                    description: todo.description,
                    completed: todo.completed
                })
            } return null;
            
        } catch (error) {
            throw new Error("DB Error!")
        }
    }

    async createTodo(newTodo: Todo): Promise<Todo> {
        try {
            const todo = await prisma.todos.create({
                data: {
                    title: newTodo.title,
                    description: newTodo.description,
                }
            })

            return new Todo({
                id: todo.id,
                title: todo.title,
                description: todo.description,
                completed: todo.completed
            });
        } catch (error) {
            throw new Error("DB Error!")
        }
    }

    async updateTodo(id: number, todo: Todo): Promise<Todo | null> {
        try {
            const updatedTodos = await prisma.todos.update({
                where: {
                    id: id
                },
                data: {
                    title: todo.title,
                    description: todo.description,
                    completed: todo.completed
                }
            })

            return new Todo({
                id: updatedTodos.id,
                title: updatedTodos.title,
                description: updatedTodos.description,
                completed: updatedTodos.completed,
            })


        } catch (error) {
            return null
        }
    }

    async deleteTodo(id: number): Promise<boolean> {
        try {
            const deletedTodo = await prisma.todos.delete({
                where: {
                    id: id
                }
            })

            return true
        } catch (error) {
            return false
        }
    }

}