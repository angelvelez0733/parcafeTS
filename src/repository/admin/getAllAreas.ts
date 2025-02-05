import db from "../../config/configDB";
import { AreasItf } from "../../interfaces/getAllAreas";
import { RowDataPacket } from "mysql2";

export const getAllAreasRepo = async (): Promise<AreasItf[]> => {
    try {
        const [rows] = await db.query<RowDataPacket[]>(
            "SELECT id_area, nombre, descripcion, estado FROM areas"
        );
        return rows as AreasItf[];
    } catch (error) {
        throw new Error("Error in repository");
    }
};

