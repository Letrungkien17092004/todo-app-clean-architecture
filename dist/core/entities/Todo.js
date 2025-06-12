export default class Todo {
    constructor(options) {
        this._id = options.id;
        this._title = options.title;
        this._description = options.description;
        this._completed = options.completed;
    }
    get id() {
        return this._id;
    }
    get title() {
        return this._title;
    }
    get description() {
        return this._description;
    }
    get completed() {
        return this._completed;
    }
}
