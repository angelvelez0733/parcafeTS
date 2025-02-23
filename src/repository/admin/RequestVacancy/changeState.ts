import db from "../../../config/configDB";

export const changeState = async (idSolicitud: number, estado: string) => {
    const sql = "UPDATE solicitud SET estado = ? WHERE id_solicitud = ?";
    const values = [estado, idSolicitud];
    try {
        const result = await db.query(sql, values);
        return result;  
    } catch (error) {
        if (error instanceof Error) {
            console.error("Error Repository", error.message);
        } else {
            console.error("Unknown error:", error);
        }
        throw error;
    }
}