import db from "../../../config/configDB";

export const finalizeVacancyRepo = async (id_vacante: number) => {
    const sqlVacancy = "UPDATE vacante SET estado = 'inactivo' WHERE id_vacante = ?";
    const sqlRequests = "UPDATE solicitud SET estado = 'rechazado' WHERE fk_id_vacante = ? AND estado = 'pendiente'";

    try {
        await db.query(sqlVacancy, [id_vacante]);
        await db.query(sqlRequests, [id_vacante]);

        return { message: `Vacante ${id_vacante} finalizada correctamente.` };
    } catch (error: any) {
        console.error("Error en el repositorio:", error.message);
        throw new Error("Error al finalizar la vacante.");
    }
};
