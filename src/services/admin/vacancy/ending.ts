import { finalizeVacancyRepo } from "../../../repository/admin/vacancy/ending";

export const finalizeVacancyService = async (id_vacante: number) => {
    return await finalizeVacancyRepo(id_vacante);
};
