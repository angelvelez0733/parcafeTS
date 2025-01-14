import jwt from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";
import dotenv from "dotenv";
dotenv.config();

interface JwtPayload {
    data: { email: string, role: string };
    exp: number;
    iat: number;
}

const validateToken = (allowedRoles: string[]) => {
    return async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            //Formato Bearer esperado del token
            const token = req.header("Authorization")?.split(" ")[1];
            if (!token) {
                res.status(401).json({ status: "You dont send token"});
                return;
            }
            
            const decoded = jwt.verify(
                token,
                process.env.SECRET as string,
            ) as JwtPayload;
            const userRole = decoded.data.role;
            if (!allowedRoles.includes(userRole)) {
                res.status(403).json({
                    status: "Access denied"
                });
                return;
            }

            req.body.tokenEmail = decoded.data.email;
            req.body.tokenRole = decoded.data.role;
            next();
        } catch (error: any) {
            res.status(403).json({ status: "Invalid token", error: error.message });
        }
    }
}

export default validateToken;