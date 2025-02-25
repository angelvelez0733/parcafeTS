import { Request, Response } from "express";
import { getVacanciesByAreaService } from "../../services/users/getVacanciesByAreas";
import { AreaVacancy } from "../../interfaces/vacancyArea";

export const getVacanciesByAreaController = async(req: Request, res: Response): Promise<void> => {
    try {
        const {areaName} = req.params;
        const vacancies: AreaVacancy[] = await getVacanciesByAreaService(areaName);
        res.status(200).json(vacancies);
        return;
    } catch (error: any) {
        res.status(500).json({
            message: "Error al obtener las vacantes",
            error: error.stack
        })
    }
}