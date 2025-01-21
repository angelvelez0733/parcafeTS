import { check, validationResult } from "express-validator";
import { Request, Response, NextFunction } from "express";

const validationParamsRegister = [
    check("name").isLength({min: 12, max: 50}).withMessage("Debe ingresar su nombre y apellido").toLowerCase(),
    check("email").isEmail().withMessage("Debe ingresar un correo electrónico válido"),
    check("phone").isLength({min: 10, max:10}).withMessage("Ingrese un número de celular válido"),
    check("password").isLength({min: 8, max: 20}).withMessage("La contraseña debe tener minimo 8 caracteres y maximo 20")
    .matches(/(?=.*[a-z])/)
    .withMessage("La contraseñ debe tener al menos una letra en minúscula")
    .matches(/(?=.*[A-Z])/)
    .withMessage("La contraseña debe tener al menos una letra en mayuscula")
    .matches(/(?=.*\W)/)
    .withMessage("La contraseña debe contener al menos un caracter especial")
];

function validationRegister(req: Request, res: Response, next: NextFunction) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        res.status(422).json({
            errors: errors.array()
        });
        return;
    }
    next();
}
export { validationParamsRegister, validationRegister };