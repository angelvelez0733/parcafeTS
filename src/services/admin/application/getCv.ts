import { getCvRepo } from "../../../repository/admin/application/getCv";

export const getCvService = async(userId: number): Promise<string | null> => {
    try {
        console.log("Starting getCvService: ", userId);
        const cvPath = await getCvRepo(userId);
        if (!cvPath) {
            throw new Error("CV not found");
        }
        return cvPath;        
    } catch (error: any) {
        console.error("Error in getCvService: ", error.message);
        throw error;
    }
}