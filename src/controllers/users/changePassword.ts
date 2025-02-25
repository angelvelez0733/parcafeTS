import { Request, Response } from "express";
import changePasswordService from '../../services/users/changePassword';
import Password from "../../DTO/changePasswordDTO";

let changePassword = async (req: Request, res: Response) : Promise<any> => {
    try{
        const {oldPassword, newPassword} = req.body;
        const id = req.body.tokenId;        
        const result = await changePasswordService.changePassword(new Password(id, oldPassword, newPassword));
        if(result){
            return res.status(200).json({
                message: "Change password succesfully"
            });
        }
    } catch(error) {
        if(error instanceof Error) {
            console.error("Error trying to change password", error.message);
            return res.status(400).json({
                message: "Error"
            });
        } else {
            console.error("Unknown error", error);  
        }
    }
}

export default changePassword;