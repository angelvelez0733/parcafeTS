import AuthRepository from "../repository/auth";
import generateToken from "../helpers/generateToken";
import Auth from "../DTO/authDTO";
import compareHash from "../helpers/compareHash";

class AuthService {
    static async auth(auth: Auth) {
        
        try {
            const user = await AuthRepository.auth(auth.email, auth.password);
            
            const roles: any = [
                {result: user, role: "user"},
                {result: user, role: "admin"},
            ];
            for(const {result, role} of roles) {
                if (result.length > 0) {
                    const isPasswordValid = await compareHash(auth.password, result[0].password);
                    if (isPasswordValid) {
                        const token = generateToken(
                            {email: auth.email, role: role},
                            process.env.SECRET,
                            60
                        );
                        return token;
                    }
                }
            };
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