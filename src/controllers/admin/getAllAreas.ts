import { Request, Response } from "express";
import { getAllAreasService } from "../../services/admin/getAllAreas";

export const getAllAreasController = async (req: Request, res: Response): Promise<void> => {
    try {
        const areas = await getAllAreasService();
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

