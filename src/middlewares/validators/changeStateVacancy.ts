import { Request, Response, NextFunction } from "express";

const validateChangeStateVacancy = (req: Request, res: Response, next: NextFunction): void => {
    const { id_vacancy } = req.params;
    const { state } = req.body;

    if (!id_vacancy || isNaN(Number(id_vacancy))) {
        res.status(400).json({
            status: "error",
            message: "id de vacante no valido"
        });
        return;
    }

    if (!state || (state !== "activo" && state !== "inactivo")) {
        res.status(400).json({
            status: "error",
            message: "Estado invalido, debe ser activo o inactivo"
        });
        return;
    }

    next();
};
export default validateChangeStateVacancy;