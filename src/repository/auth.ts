import db from "../config/configDB";

class AuthRepository {
    static async auth(email: string) {
        const sql = "SELECT id, correo, contrasenia, role FROM users WHERE correo = (?)";
        const values = [email];
        
        try {
            const [rows] = await db.query(sql, values);            
            return rows; // Retorna el primer usuario encontrado
        } catch (error: any) {
            console.error("Error executing query", error.stack);
            throw error;
        }
    }
}

export default AuthRepository;