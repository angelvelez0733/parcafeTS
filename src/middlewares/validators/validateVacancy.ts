import { Request, Response, NextFunction } from "express";

const validateVacancy = (req: Request, res: Response, next: NextFunction): void => {
    const { publication_date, deadline, fk_id_area } = req.body;

    if (!publication_date || isNaN(Date.parse(publication_date))) {
        res.status(400).json({
            status: "error",
            message: "La fecha límite es obligatoria y debe ser una fecha válida (DDDD-MM-DD)."
        });
        return;
    }

    if (!deadline || isNaN(Date.parse(deadline))) {
        res.status(400).json({
            status: "error",
            message: "La fecha límite es obligatoria y debe ser una fecha válida (DDDD-MM-DD)."
        });
        return;
    }

    const pubDate = new Date(publication_date);
    const limDate = new Date(deadline);

    

    if (pubDate > limDate) {
        res.status(400).json({
            status: "error",
            message: "La fecha de publicación debe ser menor o igual a la fecha límite.",
          });
          return;
    }

    if (fk_id_area === undefined || isNaN(Number(fk_id_area))) {
        res.status(400).json({
            status: "error",
            message: "El área (fk_id_area) es obligatoria y debe ser un número válido.",
          });
          return;
    }

    next();
}
export default validateVacancy;