import db from "../../config/configDB";
import User from "../../DTO/updateUser";

class updateRepository {
    static async getUserIdByEmail(email: string){
        const sql = "SELECT id FROM users WHERE correo = (?)";
        const values = [email];
        try {
            const [rows]: any = await db.query(sql, values);
            if (rows.length === 0) {
                throw new Error("User not found");
            }
            return rows[0].id;
        } catch (error: any) {
            console.error("Error retrieving user id", error.message);
            throw error
        }
    }


    static async updateUser(user: User) {
        const sql = "CALL actualizarUsuario(?,?,?,?)";
        const values = [user.id, user.name, user.phone, user.address, user.email,];        
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