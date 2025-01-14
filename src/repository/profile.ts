import { QueryResult } from "mysql2";
import db from "../config/configDB";

class profileRepository {
    static async getProfileByEmail(email: string) {
        const sql = "SELECT nombre, correo, cv_path FROM users WHERE correo = ?";
        const values = [email];

        try {
            const [result]: [QueryResult, any] = await db.query(sql, values);
            return result;
        } catch (error: any) {
            console.error("Error executing query: ", error.stack);
            throw error;
        }
    }
}
export default profileRepository;