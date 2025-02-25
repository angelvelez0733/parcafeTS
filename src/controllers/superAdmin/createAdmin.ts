import { Request, Response } from "express";
import CreateAdminService from "../../services/superAdmin/createAdmin";
import { CreateAdminItf } from "../../interfaces/admin";

export const createAdminController = async(req: Request, res: Response): Promise<void> => {
    try {
        const adminData: CreateAdminItf = req.body;
        
        const newAdmin = await CreateAdminService.registerAdmin(adminData);
        res.status(201).json({
            status: "Success",
            message: "Admin created ok"
        });
    } catch (error: any) {
        res.status(500).json({
            status: "error",
            message: error.message
        });
    }
}