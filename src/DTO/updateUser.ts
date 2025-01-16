class updateUserDto {
    private _id?: number;
    private _name?: string;
    private _email?: string;
    private _phone?: string;
    private _address?: string;

    constructor (id: number, name?: string, email?: string, phone?: string, address?: string) {
        this._id = id;
        this._name = name;
        this._email = email;
        this._phone = phone;
        this._address = address;
    }

    ///GETTERS
    public get id(): number | undefined {
        return this._id;
    }
    public get name(): string | undefined {
        return this._name;
    }
    public get email(): string | undefined {
        return this._email;
    }
    public get phone(): string | undefined {
        return this._phone;
    }
    public get address(): string | undefined {
        return this._address;
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
    public set phone(value: string | undefined) {
        this._phone = value;
    }
    public set address(value: string | undefined) {
        this._address = value;
    }
}
export default updateUserDto;