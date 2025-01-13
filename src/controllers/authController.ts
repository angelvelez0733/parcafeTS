import { Request, Response } from "express";
import AuthService from "../services/authService";
import Auth from "../DTO/authDTO";

const auth = async(req: Request, res: Response): Promise<any> => {
    try {
        const { email, password } = req.body;
        console.log("Received data : ", email, password);
        

        const token: any = await AuthService.auth(new Auth(email, password));

        if (token) {
            return res.status(200).json({
                status: "Successful Authentication",
                Access: token,
            });
        }

        return res.status(401).json({
            status: "Invalid email or password",
        });

    } catch (error: any) {
        return res.status(500).json({
            error: "Internal Server Error",
            errorInfo: error.message,
        });
    }
};
export default auth;