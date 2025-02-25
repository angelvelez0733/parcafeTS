import { getRequest } from "../../../repository/admin/RequestVacancy/getRequests";

export const getRequestService = async (idVacante: number)=> {
 try {
        return await getRequest(idVacante);
    } catch (error) {
        throw error;
    }
}