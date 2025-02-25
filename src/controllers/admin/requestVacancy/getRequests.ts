import { Request, Response } from "express";
import { getRequestService } from "../../../services/admin/requestVacancy/getRequests";

export const getRequestController = async (req: Request, res: Response): Promise<any> => {
    try {
        const idVacante = Number(req.params.idVacante);
        const result = await getRequestService(idVacante);

        if(result){
            res.status(201).json({
                result
            });
        }
    } catch (error) {
        console.error("Error trying to get requests", error);
        return res.status(400).json({ message: "Error" });
    }
}