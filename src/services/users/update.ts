import User from "../../DTO/updateUser";
import updateRepository from "../../repository/users/update";

class updateUser {
    static async updateData(user: User) {
        try {
            const result = await updateRepository.updateUser(user);
            
            return {
                message: "User updated successfully",
                data: result
            };
        } catch (error: any) {
            throw new Error("Error updating user" + error.message);
        }
    }
}
export default updateUser;