import db from "../../config/configDB";
import { CreateAdminItf } from "../../interfaces/admin";
import { ResultSetHeader } from "mysql2";

export const createAdminRepo = async (adminData: CreateAdminItf): Promise<{ id: number} & CreateAdminItf> => {
    const query = "INSERT INTO users(nombre, telefono, direccion, correo, contrasenia, role) VALUES (?,?,?,?,?,?)";
    const values = [
        adminData.name,
        adminData.phone,
        adminData.address,
        adminData.email,
        adminData.password,
        adminData.role
    ];
    try {
        const [result] = await db.query<ResultSetHeader>(query, values);
        return {id: result.insertId, ...adminData}
    } catch (error: any) {
        console.error("Error in register admin: ", error.message);
        throw error;
    }
}