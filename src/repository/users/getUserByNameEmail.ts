import db from '../../config/configDB';

export const getUserByNameEmail = async (nombre: string, email: string) => {
    const sql = "SELECT * FROM users WHERE nombre = ? OR correo = ?";
    const values = [nombre, email];
    try {
        const result = db.query(sql, values);
        return result;  
    } catch (error) {
        if (error instanceof Error) {
            console.error("Error Repository", error.message);
        } else {
            console.error("Unknown error:", error);
        }
        throw error;
    }
}