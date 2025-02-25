import { getVacancyUserRepo } from "../../repository/users/getVacancy";
import { VacancyUser } from "../../interfaces/getVacancyUser";

export const getVacancyUserService = async(): Promise<VacancyUser[]> => {
    try {
        const vacancies = await getVacancyUserRepo();
        return vacancies as VacancyUser[];
    } catch (error: any) {
        console.error("Error in getVacancyUserService: ", error.message );
        throw error;
    }
}