import { Request, Response } from "express";
import { getVacancyUserService } from "../../services/users/getVacancy";

export const getVacancyUserController = async (req: Request, res: Response): Promise<void> => {
    try {
        const vacancies = await getVacancyUserService();
        res.status(200).json(vacancies);
        return;
    } catch (error: any) {
        console.error("Error in controller: ", error.message);
        res.status(500).json({
            message: "Error getting vacancies"
        });
        return;
    }
}