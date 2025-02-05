import db from "../../config/configDB";
import { AreasItf } from "../../interfaces/getAllAreas";
import { RowDataPacket } from "mysql2";

export const getAllAreasRepoUser = async(): Promise<AreasItf[]> => {
    try {
        const [rows] = await db.query<RowDataPacket[]>(
            "SELECT nombre, descripcion, estado FROM areas WHERE estado = 'activo'"
        );
        return rows as AreasItf[];
    } catch (error) {
        throw new Error("Error in repository");
    }
}