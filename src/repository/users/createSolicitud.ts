import db from "../../config/configDB";

export const createApplicationRepo = async(userId: number, vacancyId: number) => {
    try {

        const [existing] = await db.query("SELECT s.id_solicitud FROM solicitud s JOIN vacante v ON s.fk_id_vacante = v.id_vacante WHERE s.fk_user_id = ? AND v.estado = 'activo'", [userId]);
        
        if((existing as any[]).length > 0) {
            throw new Error("El usuario ya tiene una solicitud en una vacante activa");
        }

        const [user] = await db.query("SELECT cv_path FROM users WHERE id = ?", [userId]);
        
        if(!(user as any[])[0]?.cv_path){
            throw new Error("El usuario debe subir un CV antes de crear una solicitud");
        }

        const [vacancy] = await db.query('SELECT id_vacante FROM vacante WHERE id_vacante = ? AND estado = "activo" AND fecha_publicacion <= CURDATE() AND fecha_limite >= CURDATE()', [vacancyId]);
        
        if (!(vacancy as any[]).length) {
            throw new Error("La vacante no existe o está inactiva");
        }

        const query = 'INSERT INTO solicitud (fk_user_id, fk_id_vacante, estado) VALUES (?, ?, "pendiente")';
        
        const [result] = await db.query(query, [userId, vacancyId]);
        
        return (result as any).insertId;
    } catch (error) {
        throw error;
    }
}