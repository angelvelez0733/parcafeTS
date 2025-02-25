import { Request, Response, NextFunction } from "express";

const validateDate = (req: Request, res: Response, next: NextFunction): void => {
    const { fecha_publicacion, fecha_limite } = req.body;

    const isValidDate = (date: string) => /^\d{4}-\d{2}-\d{2}$/.test(date) && !isNaN(Date.parse(date));

    if (!fecha_publicacion || !isValidDate(fecha_publicacion)) {
        res.status(400).json({
            status: "error",
            message: "La fecha de publicación es obligatoria y debe tener el formato válido (YYYY-MM-DD)."
        });
        return;
    }

    if (!fecha_limite || !isValidDate(fecha_limite)) {
        res.status(400).json({
            status: "error",
            message: "La fecha límite es obligatoria y debe tener el formato válido (YYYY-MM-DD)."
        });
        return;
    }

    const pubDate = new Date(fecha_publicacion);
    const limDate = new Date(fecha_limite);

    if (pubDate > limDate) {
        res.status(400).json({
            status: "error",
            message: "La fecha de publicación debe ser menor o igual a la fecha límite.",
        });
        return;
    }

    next();
};

export default validateDate;
