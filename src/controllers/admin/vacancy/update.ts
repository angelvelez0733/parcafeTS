import { Request, Response } from "express";
import { updateVacancyItf } from "../../../interfaces/updateVacancy";
import { updateVacancyService } from "../../../services/admin/vacancy/update";

export const updateVacancyController = async (req: Request, res: Response): Promise<any> => {
    try {
        const vacancyData: updateVacancyItf = req.body;
            
        const newVacancy = await updateVacancyService(vacancyData);

        res.status(201).json({
            status: "success",
            message: "Vacancy updated successfully",
        });

    } catch(error) {
        if(error instanceof Error) {
            console.error("Error trying to change password", error.message);
            return res.status(400).json({
                message: "Error"
            });
        } else {
            console.error("Unknown error", error);  
        }
    }
}

