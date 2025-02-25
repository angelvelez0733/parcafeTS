import { createVacancyRepo } from "../../../repository/admin/vacancy/create";
import { CreateVacancyItf } from "../../../interfaces/createVacancy";

export const createVacancyService = async (dataVacancy: CreateVacancyItf) => {
    try {
        return await createVacancyRepo(dataVacancy);
    } catch (error) {
        throw new Error("Error in service");
    }
}