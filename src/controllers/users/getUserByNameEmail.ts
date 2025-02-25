import { Request, Response } from "express";
import { getUserByNameEmailService } from "../../services/users/getUserByNameEmail";

export const getUserByNameEmailController = async (req: Request, res: Response): Promise<any> => {
    try {
        const { nombre, email} = req.body;

        const result = await getUserByNameEmailService(nombre, email);
        return res.status(201).json({   
            result
        });
    } catch (error) {
        if (error instanceof Error) {
            console.error("Error trying to get user", error.message);
        } else {
            console.error("Unknown error:", error);
        }
        throw error;
    }
}