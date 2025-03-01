import User from "../../DTO/userDTO";
import db from "../../config/configDB";

class registerService {
    static async registerUser(user: User) {
        const sql = "INSERT INTO users (nombre, telefono, direccion, correo, contrasenia, role) values (?,?,?,?,?,?)";
        const values = [user.name, user.phone, user.address, user.email, user.password, user.role];
        return await db.query(sql, values);
    }
}

export default registerService;