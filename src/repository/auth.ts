import db from "../config/configDB";

class AuthRepository {
    static async auth(email: string) {
        const sql = "SELECT password FROM users WHERE email = ?";
        const values = [email];
        try {
            const res = await db.query(sql, values);
            return res[0];
        } catch (error: any) {
            console.error("Error executing query", error.stack);
            throw error;
        }
    }
}
export default AuthRepository;