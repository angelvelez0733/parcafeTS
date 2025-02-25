class Auth {
    private _password: string;
    private _email: string;

    constructor (email: string, password: string,) {
        this._email = email;
        this._password = password;
        
    }

    //GETTERS
    
    public get password(): string {
        return this._password;
    }
    public get email(): string {
        return this._email;
    }

}
export default Auth;