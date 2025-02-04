import db from "../../config/configDB";
import { ResultSetHeader } from "mysql2";
import AreaDto from "../../DTO/area";

class AreaRepository {
    async createArea(areaDto: AreaDto) {
        try {
            const sql = `INSERT INTO areas(nombre, descripcion, fk_role) VALUES (?, ?,'admin')`;
            const [result] = await db.execute<ResultSetHeader>(sql, [areaDto.name, areaDto.description]);
            console.log(result.insertId);
            
            return result.insertId;
        } catch (error) {
            throw error;
        }
    }
}
export default new AreaRepository();