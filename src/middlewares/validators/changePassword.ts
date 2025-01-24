import {Request, Response, NextFunction } from "express";
import { check, validationResult } from "express-validator";

const validationParamsChangePassword = [
    check("oldPassword").isLength({min: 8, max: 20}).withMessage("La contraseña debe tener minimo 8 caracteres y maximo 20")
    .matches(/(?=.*[a-z])/)
    .withMessage("La contraseña debe tener al menos una letra en minúscula")
    .matches(/(?=.*[A-Z])/)
    .withMessage("La contraseña debe tener al menos una letra en mayuscula")
    .matches(/(?=.*\W)/)
    .withMessage("La contraseña debe contener al menos un caracter especial"),
    check("newPassword").isLength({min: 8, max: 20}).withMessage("La contraseña debe tener minimo 8 caracteres y maximo 20")
    .matches(/(?=.*[a-z])/)
    .withMessage("La contraseña debe tener al menos una letra en minúscula")
    .matches(/(?=.*[A-Z])/)
    .withMessage("La contraseña debe tener al menos una letra en mayuscula")
    .matches(/(?=.*\W)/)
    .withMessage("La contraseña debe contener al menos un caracter especial")
];

function validationChangePassword(req: Request, res: Response, next: NextFunction){
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        res.status(422).json({
            errors: errors.array()
        });
        return;
    }
    next();
}

export { validationChangePassword, validationParamsChangePassword };