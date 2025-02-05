import db from "../../config/configDB";
import AreaDto from "../../DTO/area";

class AreaRepository {
    async createArea(areaDto: AreaDto) {
        try {
            const sql = "INSERT INTO areas(nombre, descripcion, rol) VALUES (?, ?,'admin')";
            const [result] = await db.query(sql, [areaDto.name, areaDto.description]);
            
            return result;
        } catch (error) {
            throw error;
        }
    }
}
export default new AreaRepository();