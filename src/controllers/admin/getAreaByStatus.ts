import { Request, Response } from "express";
import { getAreasByStatusService } from "../../services/admin/geAreasByStatus";

export const getAreasByStatusController = async (req: Request, res: Response): Promise<void> => {
    try {
        const { status } = req.params;

        if (status !== 'activo' && status !== 'inactivo') {
            res.status(400).json({
                status: "error", 
                message: "invalid status"
            });
        }
        const areas = await getAreasByStatusService(status as "activo" | "inactivo");
        res.status(200).json(
            areas
        )
    } catch (error: any) {
        res.status(500).json({ status: "error", message: error.message });
    }
}