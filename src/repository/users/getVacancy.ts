import db from "../../config/configDB";

export const getVacancyUserRepo = async() => {
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
         AND v.fecha_limite >= CURDATE()`);
        return rows as any[];
    } catch (error: any) {
        console.error("ERROR, error in getVacancyUserRepository: ", error.message);
        throw error;
    }
}