import User from "../../DTO/userDTO";
import db from "../../config/configDB";

class registerService {
    static async registerUser(user: User) {
        const sql = "INSERT INTO users (nombre, correo, contrasenia, cv_path, role) values (?,?,?,?,?)";
        const values = [user.name, user.email, user.password, user.cv_path, user.role];
        return await db.query(sql, values);
    }
}

export default registerService;