import { Request, Response } from "express";
import { changeStateVacancyService } from "../../../services/admin/vacancy/changeState";

export const changeStateVacancyController = async (req: Request, res: Response): Promise<void> => {
    try {
        const { id_vacancy } = req.params;
        const { state } = req.body;
        const id = parseInt(id_vacancy, 10);

        if (isNaN(id)) {
            res.status(400).json({
                status: "error",
                message: "id vacancy is not valid",
            });
            return;
        }

        const success = await changeStateVacancyService({ id_vacancy: id, state });
        if (!success) {
            res.status(404).json({
                status: "error",
                message: "Vacancy not found or nothing changes"
            });
            return;
        }

        res.status(200).json({
            status: "success",
            message: `Update state of vacancy Ok: ${state}`
        });

    } catch (error: any) {
        res.status(500).json({
            status: "error",
            message: error.message
        });
    }
}