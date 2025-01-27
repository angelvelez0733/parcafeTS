import db from '../../config/configDB';
import CPassword from "../../DTO/changePasswordDTO";
import bcrypt from "bcryptjs";
import generateHash from '../../helpers/generateHash';

class ChangePasswordRepository {
    static async ChangePassword(cpassword: CPassword) {
        const { id, oldPassword, newPassword } = cpassword;
        const sql = 'SELECT contrasenia FROM users WHERE id = ?';
        try {
            const [rows]: any = await db.query(sql, [id]);
            
            // Verificar si el usuario existe
            if (rows.length === 0) {
                return { message: 'Client not found' };
            }

            const user = rows[0];

            // Comparar la contraseña antigua
            const isPasswordValid = await bcrypt.compare(oldPassword, user.contrasenia);
            if (!isPasswordValid) {
                return { message: 'Old password is incorrect' };
            }

            // Generar el hash de la nueva contraseña
            const hashedPassword = await generateHash(newPassword);

            // Actualizar la contraseña
            await this.updatePassword(id, hashedPassword);

            return { message: 'Password updated successfully' };
        } catch (error) {
            console.error('Error in ChangePassword:', error);
            throw error;
        }
    }

    static async updatePassword(id: number, newPassword: string) {
        const sql = 'UPDATE users SET contrasenia = ? WHERE id = ?';
        const values = [newPassword, id];
        try {
            await db.query(sql, values);
        } catch (error) {
            if (error instanceof Error) {
                console.error("Error updating password:", error.message);
            } else {
                console.error("Unknown error:", error);
            }
            throw error; // Propagar el error para manejarlo en niveles superiores
        }
    }
}

export default ChangePasswordRepository;
