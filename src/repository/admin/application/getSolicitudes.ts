import db from "../../../config/configDB";

export const getApplicationRepo = async () => {
    try {
        const [rows] = await db.query(`SELECT
            s.id_solicitud,
            u.id AS user_id,
            u.nombre AS user_nombre,
            u.correo AS user_correo,
            v.id_vacante,
            v.nombre AS vacante_nombre,
            s.estado
        FROM solicitud s
        JOIN users u ON s.fk_user_id = u.id
        JOIN vacante v ON s.fk_id_vacante = v.id_vacante
        `);
        console.log("solicutdes Fetched: ", rows);
        return rows as any[];
    } catch (error: any) {
        console.error("Error in getApplicationRepo: ", error.message);
        throw error;
    }
}