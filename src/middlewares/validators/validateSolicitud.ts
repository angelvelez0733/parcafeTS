import { Request, Response, NextFunction } from "express";
import { CreateApplicationDto } from "../../DTO/solicitud";

export const validateApplication = (req: Request, res: Response, next: NextFunction): void => {
    const { vacancyId } = req.body;
  if (!vacancyId || isNaN(vacancyId)) {
    res.status(400).json({ message: 'vacanteId es requerido y debe ser un número' });
    return;
  }
  req.body = { ...req.body, ...new CreateApplicationDto(Number(vacancyId)) }; // Preserva tokenId, tokenEmail, etc.
  next();
}