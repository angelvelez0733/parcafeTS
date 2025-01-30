import connection from "../../config/configDB";

export class UploadCvRepository {
    async updateCvPath(userId: number, cvPath: string): Promise<string | null> {
        try {
            // 1. Obtener el path antiguo
            const [oldCv]: any = await connection.query(
                "SELECT cv_path FROM users WHERE id = ?", 
                [userId]
            );

            // 2. Actualizar el nuevo path
            await connection.query(
                "UPDATE users SET cv_path = ? WHERE id = ?",
                [cvPath, userId]
            );

            return oldCv[0]?.cv_path || null;
        } catch (error) {
            throw new Error("Error al actualizar CV en la base de datos");
        }
    }
}