import { Request, Response, NextFunction } from "express";

export const validateUpdateArea = (req: Request, res: Response, next: NextFunction): void => {
    const {id_area} = req.params;
    const {name, description} = req.body;

    if (!id_area || isNaN(Number(id_area))) {
        res.status(400).json({ status: "error", message: "ID de área inválido" });
        return;
    }

    if (name && typeof name !== "string") {
        res.status(400).json({ status: "error", message: "El nombre debe ser una cadena de texto" });
        return;
    }

    if (description && typeof description !== "string") {
        res.status(400).json({ status: "error", message: "La descripción debe ser una cadena de texto" });
        return;
    }

    next();
}