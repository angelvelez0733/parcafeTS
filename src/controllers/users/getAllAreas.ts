import { Request, Response } from "express";
import { getAllAreasServiceUser } from "../../services/users/getAllAreas";

export const getAllAreasControllerUser = async (req: Request, res: Response): Promise<void> => {
    try {
        const areas = await getAllAreasServiceUser();
        res.status(200).json(
            areas
        );
    } catch (error: any) {
        res.status(500).json({
            status: "error",
            message: error.message
        });
    }
};