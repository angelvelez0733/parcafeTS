import db from "../../config/configDB";
import { AreaVacancy } from "../../interfaces/vacancyArea";

export const getVacanciesByAreaRepo = async(areaName: string): Promise<AreaVacancy[]> => {
    try {
        const [rows] = await db.query(`SELECT
        v.id_vacante,
        v.nombre,
        v.descripcion,
        v.fecha_publicacion,
        v.fecha_limite,
        a.nombre AS area_nombre
      FROM vacante v
      JOIN areas a ON v.fk_id_area = a.id_area
      WHERE v.estado = "activo"
        AND v.fecha_limite >= CURDATE()
        AND a.nombre = ?`, [areaName]);
        return rows as AreaVacancy[];
    } catch (error: any) {
        console.error("Error al obtener las vacantes en el repositorio", error.message);
        throw error;
    }
}