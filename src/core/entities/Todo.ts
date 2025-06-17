

export default class Todo {
    private _id: number | null;
    private _title: string;
    private _description: string | null;
    private _completed: boolean;
    
    constructor(options: {id: number | null, title: string, description: string | null, completed: boolean}) {
        this._id = options.id;
        this._title = options.title;
        this._description = options.description;
        this._completed = options.completed;
    }

    public get id(): number | null{
        return this._id;
    }

    public get title(): string {
        return this._title;
    }

    public get description(): string | null {
        return this._description;
    }

    public get completed(): boolean {
        return this._completed;
    }
}