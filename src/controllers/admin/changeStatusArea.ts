import { Request, Response } from "express";
import { changeStatusAreaService } from "../../services/admin/changeStatusArea";

export const changeStatusAreaController = async (req: Request, res: Response): Promise<void> => {
    try {
        const {id_area} = req.params;
        const {status} = req.body;

        const success = await changeStatusAreaService({id_area: parseInt(id_area), status});

        if (!success) {
            res.status(404).json({
                status: "error",
                message: "Area not found"
            });
        };

        res.status(200).json(
            "Change Status"
        )
    } catch (error: any) {
        res.status(500).json({
            status: "error",
            message: error.message
        })
    }
}