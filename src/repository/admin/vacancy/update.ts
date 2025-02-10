import { updateVacancyItf } from "../../../interfaces/updateVacancy";
import db from '../../../config/configDB';

export const update = async (updateVacancy: updateVacancyItf) => {
    const sql = "CALL actualizarVacancy(?,?,?,?)";
    const values = [updateVacancy.id_vacancy, updateVacancy.nombre, updateVacancy.descripcion, updateVacancy.fk_id_area];
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