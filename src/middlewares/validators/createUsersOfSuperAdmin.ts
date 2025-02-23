import { Request, Response, NextFunction } from "express";

const validateUserCreation = (req: Request, res: Response, next: NextFunction): void => {
  const { name, email, password, role } = req.body;

  if (!name || typeof name !== "string" || name.trim().length < 3) {
    res.status(400).json({ status: "error", message: "El nombre es obligatorio y debe tener al menos 3 caracteres" });
    return;
  }
  if (!email || typeof email !== "string") {
    res.status(400).json({ status: "error", message: "El correo es obligatorio" });
    return;
  }
  if (!password || typeof password !== "string" || password.trim().length < 6) {
    res.status(400).json({ status: "error", message: "La contraseña es obligatoria y debe tener al menos 6 caracteres" });
    return;
  }
  if (!role || (role !== "user" && role !== "admin")) {
    res.status(400).json({ status: "error", message: "El campo 'role' es obligatorio y debe ser 'user' o 'admin'" });
    return;
  }
  next();
};

export default validateUserCreation;
