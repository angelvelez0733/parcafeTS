import { Request, Response } from "express";
import User from "../../DTO/userDTO";
import registerService from "../../services/users/register";

let register = async (req: Request, res: Response): Promise<any> => {
    try {   
        const {
            name,
            email,
            password    
        } = req.body;

        const result = await registerService.register(new User(name, email, password));
        return res.status(201).json({
            message: "User created successfully",
        });

    } catch (error: any) {
        console.error("Error en el controlador", error.stack);
        throw error;
    }
}
export default register;