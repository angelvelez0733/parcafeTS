import db from "../../../config/configDB";
import { CreateVacancyItf } from "../../../interfaces/createVacancy";
import { ResultSetHeader } from "mysql2";

export const createVacancyRepo = async (vacancy: CreateVacancyItf) => {
    const sql = "INSERT INTO vacante (nombre, descripcion, fecha_publicacion, fecha_limite, fk_id_area, rol) VALUES (?, ?, ?, ?, ?, 'admin')"
    const values = [vacancy.name, vacancy.description, vacancy.publication_date, vacancy.deadline, vacancy.fk_id_area]

    try {
        const [result] = await db.query<ResultSetHeader>(sql, values);
        return {id_vacancy: result.insertId, ...vacancy};
    } catch (error: any) {
        error.message;
        throw new Error("Error in repository");
    }
}