import { Request, Response } from "express";
import { updateAreaService } from "../../services/admin/updateArea";

export const updateAreaController = async (req: Request, res: Response): Promise<void> => {
    try {
        const {id_area} = req.params;
        const { name, description } = req.body;

        if (!name && !description) {
            res.status(400).json({
                status: "error",
                message: "Not info to update"
            });
        }

        const success = await updateAreaService({id_area: parseInt(id_area), name, description});

        if (!success) {
            res.status(400).json({
                status: "error",
                message: "Area not found"
            });
            return;
        }

        res.status(200).json({
            status: "success",
            message: "Area updated successfully"
        });
    } catch (error: any) {
        res.status(500).json({ status: "error", message: error.message });
    }
}