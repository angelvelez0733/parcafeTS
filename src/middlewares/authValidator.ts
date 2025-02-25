import { check, validationResult } from "express-validator";
import { Request, Response, NextFunction } from "express";

const validationParams = [
    check("email").isEmail().withMessage("It must be a valid email")
];

function validator(req: Request, res: Response, next: NextFunction) {
    const errors = validationResult(req);
    if(!errors.isEmpty()) {
        res.status(422).json({
            errors: errors.array()
        });
        return;
    }
    next();
}
export { validationParams, validator };