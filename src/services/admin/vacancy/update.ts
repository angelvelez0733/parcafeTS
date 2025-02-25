import { updateVacancyItf } from "../../../interfaces/updateVacancy";
import { update } from "../../../repository/admin/vacancy/update";

export const updateVacancyService = async (updateVacancy: updateVacancyItf) => {        
    try {
        return await update(updateVacancy);
    } catch (error) {
        if (error instanceof Error) {
            console.error("Error updating vacancy data", error.message);
        } else {
            console.error("Unknown error:", error);
        }
        throw error;
    }
}