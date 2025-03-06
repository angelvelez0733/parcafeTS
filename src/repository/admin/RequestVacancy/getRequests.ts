import db from '../../../config/configDB';

export const getRequest = async (idVacante: number) => {
    const sql = 'SELECT * FROM solicitud WHERE fk_id_vacante = ?';
    const values = [idVacante];
    try {
        const result = await db.query(sql, values);
        return result;
    }catch (error) {
        if (error instanceof Error) {
            console.error("Error Repository", error.message);
        } else {
            console.error("Unknown error:", error);
        }
        throw error;
    }
}