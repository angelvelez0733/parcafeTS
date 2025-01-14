import { Request, Response, NextFunction } from "express";
import profileService from "../services/profile";

const getProfile = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
        const email = req.body.tokenEmail;
        const profile = await profileService.getProfileByEmail(email);

        res.status(200).json({
            status: "success",
            profile
        });

    } catch (error: any) {
        console.error("Error fetching profile:", error.message);
        res.status(500).json({
            status: "error in controller",
            message: error.message
        });
    }
}
export default {getProfile};