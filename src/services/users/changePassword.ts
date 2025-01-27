import CPassword from "../../DTO/changePasswordDTO";
import changePasswordRepository from "../../repository/users/changePassword";

class ChangePassword {
    static async changePassword (passwordDTO: CPassword){
        console.log('Received passwordDTO:', passwordDTO);
        const user = await changePasswordRepository.ChangePassword(passwordDTO);
        return { message: user.message };
    }
}

export default ChangePassword;