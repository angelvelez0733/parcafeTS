class AreaDto {
    private _name: string;
    private _description: string;
    
    constructor(name: string, description: string) {
        this._name = name;
        this._description = description;
    }

    //GETTERS
    public get name(): string {
        return this._name;
    }
    public get description(): string {
        return this._description;
    }

    //SETTERS
    public set name(name: string) {
        this._name = name;
    }    
    public set description(description: string) {
        this._description = description;
    }
}
export default AreaDto;