import { Request } from "express";
import Todo from '../../core/entities/Todo';

export default class TodoMapper {

    /**
     * convert data from request to entity
     * @description please valid data before use
     * @param req express http request
     * 
     * @returns {Todo}
     */
    public static toInput(req: Request): Todo {
        let { id, title, completed } = req.body;
        return new Todo({ id, title, completed })
    }

    /**
     * convert data from entity to object
     * @param todo todo entity
     * 
     * @returns {{ id?: string, title: string, completed: boolean }}
     */
    public static toOutput(todo: Todo): { id?: string, title: string, completed?: boolean } {
        return {
            id: todo.id,
            title: todo.title,
            completed: todo.completed
        }
    }
}
