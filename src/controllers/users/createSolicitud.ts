import { Request, Response } from "express";
import { createApplicationService } from "../../services/users/createSolicitud";

export const createApplicationController = async (req: Request, res: Response): Promise<void> => {
    try {
        const { vacancyId, tokenId } = req.body;
        
        
        const result = await createApplicationService(tokenId, vacancyId);
        console.log(result);
        
        res.status(201).json(
            result
        );
        return;
    } catch (error) {
        res.status(400).json({
            message: (error as Error).message
        });
        return;
    }
}