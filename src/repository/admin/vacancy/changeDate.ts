import { changeDateItf } from "../../../interfaces/changeDate";
import db from '../../../config/configDB';

export const changeDates = async (data: changeDateItf) => {
    const sql = "CALL actualizarFecha(?, ?, ?)";
    const values = [data.id_vacancy, data.fecha_publicacion, data.fecha_limite];
    try {
        const result = await db.query(sql, values);
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