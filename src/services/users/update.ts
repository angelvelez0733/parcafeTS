import User from "../../DTO/updateUser";
import updateRepository from "../../repository/users/update";

class updateUser {
    static async updateData(userData: {name: string, email: string, emailToUpdate: string, phone: string, address: string}) {
        try {
            const userId = await updateRepository.getUserIdByEmail(userData.email);

            const user: User = {
                id: userId,
                name: userData.name,
                email: userData.email,
                phone: userData.phone,
                address: userData.address
            };

            const result = await updateRepository.updateUser(user); 
            return {
                message: "User updated successfully",
                result,
            };
        } catch (error: any) {
            console.error("Error in update service:", error.message);
            throw new Error("Error updating user");
        }
    }
}
export default updateUser;