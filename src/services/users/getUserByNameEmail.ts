import { getUserByNameEmail } from "../../repository/users/getUserByNameEmail"

export const getUserByNameEmailService = async (nombre: string, email: string) => {
    try {
        return getUserByNameEmail(nombre, email);
    } catch (error) {
        throw new Error("Error in service");
    }
}