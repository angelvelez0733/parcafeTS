import db from "../../config/configDB";
import { UpdateAreaItf } from "../../interfaces/updateArea";
import { ResultSetHeader } from "mysql2";

export const updateArea = async ({id_area, name, description}: UpdateAreaItf): Promise<boolean> => {
    try {
        const [result] = await db.query<ResultSetHeader>("UPDATE areas SET nombre = IFNULL(?, nombre), descripcion = IFNULL(?, descripcion) WHERE id_area = ?", [name, description, id_area]);
        return result.affectedRows > 0;
    } catch (error) {
        throw error;
    }
}