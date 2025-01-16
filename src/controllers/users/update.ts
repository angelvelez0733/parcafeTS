import { Request, Response, NextFunction } from "express";
import updateUser from "../../services/users/update";

class updateController {
    static async updateUser(req: Request, res: Response, next: NextFunction): Promise<any> {
        try {
            const { name, email, phone, address } = req.body;
            const tokenEmail = req.body.tokenEmail;         

            if (!tokenEmail) {
                return res.status(400).json({ message: "Token email not found" });
            }

            const result = await updateUser.updateData({
                email: tokenEmail,
                name,
                emailToUpdate: email,
                phone,
                address,
            });
            return res.status(200).json({result});
            next();
        } catch (error: any) {
            console.error("Error in update controller:", error.message);
            return res.status(500).json({ message: "Error updating user", error: error.message });
        }
    }
}
export default updateController;