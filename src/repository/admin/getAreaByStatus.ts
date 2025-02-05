import db from "../../config/configDB";
import { AreasItf } from "../../interfaces/getAllAreas";
import { RowDataPacket } from "mysql2";

export const getAreasByStatus = async (status: "activo" | "inactivo"): Promise<AreasItf[]> => {
    try {
        const [rows] = await db.query<RowDataPacket[]>("SELECT id_area, nombre, descripcion FROM areas WHERE estado = ?", [status]);
        return rows as AreasItf[];
    } catch (error: any) {
        throw new Error("Error in repository");
    }
};