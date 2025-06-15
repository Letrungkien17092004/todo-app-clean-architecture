import { Request } from "express";
import Todo from '../../core/entities/Todo.js';
import { MapperError } from "./ErrorMapper.js";

export default class TodoMapper {

    /**
     * convert data from request.body to entity
     * @param req express http request
     * 
     * @returns {Todo}
     */
    public static ReqBodytoInput(req: Request): Todo {
        const { id, title, description, completed } = req.body

        if (!(typeof id == "number" || id == null)) {
            throw new MapperError("Invalid data")
        }

        else if (!(typeof title == "string")) {
            throw new MapperError("Invalid data")
        }

        else if (!(typeof description == "string" || description == null)) {
            throw new MapperError("Invalid data")
        }

        else if (!(typeof completed == "boolean" || completed == null)) {
            throw new MapperError("Invalid data")
        }

        else {
            return new Todo({ id, title, description, completed })
        }
    }

    /**
     * convert data from entity to object
     * @param todo todo entity
     * 
     * @returns {{ id?: string, title: string, completed: boolean }}
     */
    public static toOutput(todo: Todo): { id: number | null, title: string, description: string | null,completed: boolean | null} {
        return {
            id: todo.id,
            title: todo.title,
            description: todo.description,
            completed: todo.completed
        }
    }
}
