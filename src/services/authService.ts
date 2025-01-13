import AuthRepository from "../repository/auth";
import generateToken from "../helpers/generateToken";
import Auth from "../DTO/authDTO";
import compareHash from "../helpers/compareHash";

class AuthService {
    static async auth(auth: Auth) {
        
        try {
            const user: any = await AuthRepository.auth(auth.email);
            
            if (user.length > 0) {
                const isValidPassword = await compareHash(auth.password, user[0].contrasenia);                
                if (isValidPassword) {
                    const token = generateToken(
                        {email: auth.email, role: user[0].role},
                        process.env.SECRET,
                        60
                    );                    
                    return token;
                }
            }
            return null;
        } catch (error) {
            if (error instanceof Error) {
                throw new Error(
                    "An error occurred, error information,: " + error.message
                );
            }
        }

        
    }
}
export default AuthService;