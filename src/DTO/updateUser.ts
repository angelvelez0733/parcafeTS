class updateUserDto {
    private _id: number;
    private _name?: string;
    private _email?: string;

    constructor (id: number, name?: string, email?: string) {
        this._id = id;
        this._name = name;
        this._email = email;
    }

    ///GETTERS
    public get id(): number {
        return this._id;
    }
    public get name(): string | undefined {
        return this._name;
    }
    public get email(): string | undefined {
        return this._email;
    }

    ///SETTERS
    public set id(value: number) {
        this._id = value;
    }
    public set name(value: string | undefined) {
        this._name = value;
    }
    public set email(value: string | undefined) {
        this._email = value;
    }
}
export default updateUserDto;