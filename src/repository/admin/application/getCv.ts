import db from "../../../config/configDB";

interface UserCv {
    cv_path: string;
}
export const getCvRepo = async(user_id: number): Promise<string | null> => {
    try {
        const [rows] = await db.query("SELECT cv_path FROM users WHERE id = ?", [user_id]);

        const rowsArray = rows as UserCv[];

        return rowsArray[0]?.cv_path as string || null;
        
    } catch (error: any) {
        console.error("Error in getCvRepository: ", error.message);
        throw error;
    }
}