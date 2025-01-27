class Password {
    private _id: number;
    private _oldPassword: string;
    private _newPassword: string;

    constructor(id: number, oldPassword: string, newPassword: string){
        this._id = id;
        this._oldPassword = oldPassword;
        this._newPassword = newPassword;
    }

    public get id(){
        return this._id;        
    }
    public get oldPassword(){
        return this._oldPassword;
    }
    public get newPassword(){
        return this._newPassword;
    }   
    public set id(value: number){
        this._id = value;
    }
    public set oldPassword(value: string){
        this._oldPassword = value;
    } 
    public set newPassword(value: string){
        this._newPassword = value
    }
} 

export default Password;