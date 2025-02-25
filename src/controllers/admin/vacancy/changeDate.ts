import { Request, Response } from "express";
import { changeDateItf } from "../../../interfaces/changeDate";
import { changeDateService } from "../../../services/admin/vacancy/changeDate";

export const changeDateController = async(req: Request, res: Response): Promise<any> => {
    try {
        const data: changeDateItf = req.body;

        const result = await changeDateService(data);

        return res.status(201).json({
            status: "success",
            message: "Date Change Succesffully",
        });
        
    } catch(error) {
        if(error instanceof Error) {
            console.error("Error trying to change date", error.message);
            return res.status(400).json({
                message: "Error"
            });
        } else {
            console.error("Unknown error", error);  
        }
    }
}