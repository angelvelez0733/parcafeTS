import db from "../config/configDB";

class AuthRepository {
    static async auth(email: string, role: string) {
        const sql = "SELECT correo, contrasenia, role FROM users WHERE correo = (?)";
        const values = [email, role];
        console.log(values);
        
        try {
            const [rows] = await db.query(sql, values);
            console.log(rows);
            
            return rows; // Retorna el primer usuario encontrado
        } catch (error: any) {
            console.error("Error executing query", error.stack);
            throw error;
        }
    }
}

export default AuthRepository;