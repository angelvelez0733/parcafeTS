import AuthRepository from "../repository/auth";
import generateToken from "../helpers/generateToken";
import Auth from "../DTO/authDTO";
import bcrypt from "bcryptjs";

class AuthService {
    static async auth(auth: Auth) {
        
        try {
            const userResult = await AuthRepository.auth(auth.role);

            const roles = [
                {result: userResult, role: "user"},
                {result: userResult, role: "admin"},
            ];
        } catch (error) {
            
        }

        
    }
}