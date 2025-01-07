import userRepository from "../../repository/users/register";
import generateHash from "../../helpers/generateHash";
import User from "../../DTO/userDTO";

class userService {
    static async register(user: User){
        user.password = await generateHash(user.password);
        return await userRepository.registerUser(user);
    }
}
export default userService;