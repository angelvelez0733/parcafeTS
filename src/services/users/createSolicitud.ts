import { createApplicationRepo } from "../../repository/users/createSolicitud";

export const createApplicationService = async (userId: number, vacancyId: number) => {
    try {
        const applicationId = await createApplicationRepo(userId, vacancyId);
        console.log(applicationId);
        
        return { id: applicationId, message: "Application created successfully" };
    } catch (error) {
        throw error;
    }
}