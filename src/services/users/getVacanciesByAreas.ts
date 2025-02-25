import { getVacanciesByAreaRepo } from "../../repository/users/getVacanciesByArea";
import { AreaVacancy } from "../../interfaces/vacancyArea";

export const getVacanciesByAreaService = async(areaName: string): Promise<AreaVacancy[]> => {
    try {
        const vacancies = await getVacanciesByAreaRepo(areaName);
        return vacancies;
    } catch (error: any) {
        console.error("Error en el service", error.message);
        throw error;
    }
}