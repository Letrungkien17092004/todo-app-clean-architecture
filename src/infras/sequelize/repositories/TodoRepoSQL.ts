import ITodoRepository from "src/core/applications/repositories/ITodoRepository.js";
import Todo from "src/core/entities/Todo.js"
import { TodoModel } from "../models/index.js";

/**
 * Lớp TodoRepoPostgres là một triển khai của interface ITodoRepository sử dụng Sequelize với cơ sở dữ liệu Postgres.
 * 
 * Lớp này cung cấp các phương thức để thực hiện các thao tác CRUD (Create, Read, Update, Delete) cho đối tượng Todo.
 * 
 * @remarks
 * - Sử dụng các phương thức của Sequelize để thao tác với bảng Todo trong cơ sở dữ liệu.
 * - Tất cả các phương thức đều xử lý lỗi và trả về lỗi "DB Error" nếu có vấn đề xảy ra trong quá trình truy vấn.
 * 
 * @example
 * const repo = new TodoRepoPostgres();
 * const todos = await repo.getAllTodos();
 * 
 * @method getAllTodos Lấy danh sách tất cả các Todo từ cơ sở dữ liệu.
 * @method getTodoById Lấy một Todo theo id.
 * @method createTodo Tạo mới một Todo.
 * @method updateTodo Cập nhật thông tin một Todo theo id.
 * @method deleteTodo Xóa một Todo theo id.
 */

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

    async getTodoById(id: number): Promise<Todo | null> {
        try {
            const todo = await TodoModel.findByPk(id)
            if (todo) {
                return new Todo({
                    id: todo.id,
                    title: todo.title,
                    description: todo.description,
                    completed: todo.completed
                })
            } return null
        } catch (error) {
            throw new Error("DB Error")
        }
    }

    async createTodo(newTodo: Todo): Promise<Todo> {
        try {
            const todo = await TodoModel.create({
                title: newTodo.title,
                description: newTodo.description,
                completed: newTodo.completed
            })

            return new Todo({
                id: todo.id,
                title: todo.title,
                description: todo.description,
                completed: todo.completed
            })
        } catch (error) {
            throw new Error("DB Error")
        }
    }

    async updateTodo(id: number, todo: Todo): Promise<Todo | null> {
        try {
            const todoNeedUpdate = await TodoModel.findByPk(id)
            if (todoNeedUpdate) {
                await todoNeedUpdate.update({
                    title: todo.title,
                    description: todo.description,
                    completed: todo.completed
                })

                return new Todo({
                    id: todoNeedUpdate.id,
                    title: todoNeedUpdate.title,
                    description: todoNeedUpdate.description,
                    completed: todoNeedUpdate.completed
                })
            } return null
        } catch (error) {
            throw new Error("DB Error")
        }

    }

    async deleteTodo(id: number): Promise<boolean> {
        try {
            const todo = await TodoModel.findByPk(id)
            if (todo) {
                await todo.destroy()
                return true
            } return false
        } catch (error) {
            throw new Error("DB Error")
        }
    }
}