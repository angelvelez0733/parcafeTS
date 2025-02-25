import { Request, Response } from "express";
import { finalizeVacancyService } from "../../../services/admin/vacancy/ending";

export const finalizeVacancyController = async (req: Request, res: Response): Promise<any> => {
    const { id_vacante } = req.params;

    try {
        const result = await finalizeVacancyService(Number(id_vacante));
        return res.status(200).json(result);
    } catch (error: any) {
        return res.status(500).json({ error: "Error al finalizar la vacante." });
    }
};
