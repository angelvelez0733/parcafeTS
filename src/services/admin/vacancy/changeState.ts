import { ChangeStateVacancyItf } from "../../../interfaces/changeStateVacancy";
import { changeStateVacancyRepo } from "../../../repository/admin/vacancy/changeState";

export const changeStateVacancyService = async(data: ChangeStateVacancyItf): Promise<boolean> => {
    try {
        return await changeStateVacancyRepo(data);
    } catch (error) {
        throw error;
    }
}