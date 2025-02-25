import { Request, Response } from "express";
import path from "path";
import { getCvService } from "../../../services/admin/application/getCv";

export const getCvController = async(req: Request, res: Response): Promise<void> => {
    try {
        const userId = parseInt(req.params.userId, 10);
        if (isNaN(userId)) {
            res.status(400).json({message: "Id user invalid"});
            return;
        }
        const cvPath = await getCvService(userId);
        if (!cvPath) {
            res.status(404).json({message: "CV not found"});
            return;
        }
        
        const absolutePath = path.resolve(cvPath);
        console.log("Serving CV from path: ", absolutePath);
        res.sendFile(absolutePath, (err) => {
            if (err) {
                console.error("Error sending file", err);
                res.status(500).json({message: "Error al servir el cv"});
            }
        })
        
    } catch (error: any) {
        console.error("Controller error: ", error.message);
        res.status(500).json({message: "Error al obtener el cv", error: error.message});
    }
}