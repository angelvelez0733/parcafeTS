class Auth {
    private _role: string;
    private _password: string;
    private _email: string;

    constructor (email: string, password: string, role: string) {
        this._email = email;
        this._password = password;
        this._role = role;
    }

    //GETTERS
    public get role(): string {
        return this._role;
    }
    public get password(): string {
        return this._password;
    }
    public get email(): string {
        return this._email;
    }

}
export default Auth;