import db from "../../config/configDB";
import User from "../../DTO/updateUser";

class updateRepository {
    static async updateUser(user: User) {
        const sql = "CALL actualizarUsuario(?,?,?)";
        const values = [user.id, user.name, user.email];        
        console.log(values);
        
        try {
            const result = await db.query(sql, values);
            return result;
        } catch (error: any) {
            console.error("Error executing quey", error.stack);
            throw error;
        }
    }
}
export default updateRepository;