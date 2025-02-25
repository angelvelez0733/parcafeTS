import { Request, Response } from "express";
import { createVacancyService } from "../../../services/admin/vacancy/create";
import { CreateVacancyItf } from "../../../interfaces/createVacancy";

export const createVacancyController = async (req: Request, res: Response): Promise<void> => {
    try {
        const vacancyData: CreateVacancyItf = req.body;
    
        const newVacancy = await createVacancyService(vacancyData);
    
        res.status(201).json({
            status: "success",
            message: "Vacancy created successfully",
            data: newVacancy,
        });
    } catch (error: any) {
        res.status(500).json({
            status: "error",
            message: error.message,
        })
    }

}