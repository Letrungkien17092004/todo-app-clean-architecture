

export default class Todo {
    private _id: string;
    private _title: string;
    private _completed: boolean;
    
    constructor(id: string, title: string, completed: boolean) {
        this._id = id;
        this._title = title;
        this._completed = completed;
    }

    public get id(): string {
        return this._id;
    }

    public get title(): string {
        return this._title;
    }

    public get complete(): boolean {
        return this._completed;
    }
}