import { Request, Response } from "express";
import { getApplicationService } from "../../../services/admin/application/getSolicitudes";

export const getApplicationController = async(req: Request, res: Response): Promise<void> => {
    try {
        console.log("Controller getApplication called by admin:", req.body.tokenId);
        const application = await getApplicationService();
        res.status(200).json(application);
        return;
    } catch (error: any) {
        console.error("Controller error: ", error.message);
        res.status(500).json({
            message: "Error al obtener las solicitudes", 
            error: error.message
        });
        return;
    }
}