import { Request, Response } from "express";
import db from "../config/configDB";
import jwt from "jsonwebtoken";

interface JwtPayload {
    exp: number;
}

export const logout = async (req: Request, res: Response): Promise<void> => {
    try {
        const token = req.header("Authorization")?.split(" ")[1];
        if (!token) {
            res.status(400).json({ status: "No token provided" });
            return;
        }
        const decoded = jwt.verify(token, process.env.SECRET as string) as JwtPayload;
        await db.query("INSERT INTO token_blacklist (token, expires_at) VALUES (?, FROM_UNIXTIME(?))", [token, decoded.exp]);
        res.status(200).json({ status: "Logout successful" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ status: "Error during logout", error });
    }
}