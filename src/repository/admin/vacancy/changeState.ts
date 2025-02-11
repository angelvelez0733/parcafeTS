import db from "../../../config/configDB";
import { ResultSetHeader } from "mysql2";
import { ChangeStateVacancyItf } from "../../../interfaces/changeStateVacancy";

export const changeStateVacancyRepo = async ({id_vacancy, state}: ChangeStateVacancyItf): Promise<boolean> =>{
    try {
        const sql = "UPDATE vacante SET estado = ? WHERE id_vacante = ?";
        const values = [state, id_vacancy];

        const [result] = await db.query<ResultSetHeader>(sql, values);
        return result.affectedRows > 0;
    } catch (error: any) {
        throw new Error("Error al actualizar el estado de la vacante: " + error.message);
    }
}