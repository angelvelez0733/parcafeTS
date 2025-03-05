import jwt from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";
import dotenv from "dotenv";
import db from "../config/configDB";
dotenv.config();

interface JwtPayload {
    data: { id: number, email: string, role: string };
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

            const [blacklistRows] = await db.query("SELECT * FROM token_blacklist WHERE token = ?", [token]);
            if(Array.isArray(blacklistRows) && blacklistRows.length > 0) {
                res.status(401).json({status: "Token has been invalidated"});
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

            req.body.tokenId = decoded.data.id
            req.headers.tokenId = decoded.data.id.toString();
            req.body.tokenEmail = decoded.data.email;
            req.body.tokenRole = decoded.data.role;
            next();
        } catch (error: any) {
            res.status(403).json({ status: "Invalid token", error: error.message });
        }
    }
}

export default validateToken;