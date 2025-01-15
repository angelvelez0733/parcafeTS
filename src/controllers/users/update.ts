import { Request, Response, NextFunction } from "express";
import updateUser from "../../services/users/update";

class updateController {
    static async updateUser(req: Request, res: Response, next: NextFunction): Promise<any> {
        try {
            const userId = req.body.tokenId;
            console.log(userId);
            
            const { name, email } = req.body;

            if (!name && !email) {
                return res.status(400).json({
                    message: "Name or email es required"
                });
            }

            const updatedUser: any = {
                id: userId,
                name: name || null,
                email: email || null,
            };

            const result = await updateUser.updateData(updatedUser);
            res.status(200).json({
                result
            });
            next();
        } catch (error: any) {
            res.status(500).json({
                message: "Error updating user", 
                error: error.message
            })
        }
    }
}
export default updateController;