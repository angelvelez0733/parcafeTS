class User {
    private _name: string;
    private _email: string;
    private _password: string;
    private _cv_path?: string;
    private _role: string;

    constructor(name: string, email: string, password: string, cv_path: string, role: string){
        this._name = name;
        this._email = email;
        this._password = password;
        this._cv_path = cv_path;
        this._role = role;
    }

    //GETTERS
    public get name(): string {
        return this._name;
    }
    public get email(): string {
        return this._email;
    }
    public get password(): string {
        return this._password;
    }
    public get cv_path(): string | undefined {
        return this._cv_path;
    }
    public get role(): string {
        return this._role;
    }

    //SETTERS
    public set name(name: string) {
        this._name = name;
    }
    public set email(email: string) {
        this._email = email;
    }
    public set password(password: string) {
        this._password = password;
    }
    public set cv_path(cv_path: string | undefined) {
        this._cv_path = cv_path;
    }
    public set role(role: string) {
        this._role = role;
    }

}
export default User;