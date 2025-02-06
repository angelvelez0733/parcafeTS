import db from "../../config/configDB";
import { ResultSetHeader } from "mysql2";
import { ChangeStatusAreaItf } from "../../interfaces/changeStatusArea";

export const changeStatusAreaRepo = async ({id_area, status}: ChangeStatusAreaItf): Promise<boolean> => {
    try {
        const [result] = await db.query<ResultSetHeader>("UPDATE areas SET estado = ? WHERE id_area = ?", [status, id_area]);
        return result.affectedRows > 0;
        
    } catch (error) {
        throw error;
    }
}