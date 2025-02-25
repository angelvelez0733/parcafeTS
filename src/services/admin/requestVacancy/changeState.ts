import { changeState } from "../../../repository/admin/RequestVacancy/changeState";

export const changeStateService = async (idSolicitud: number, estado: string): Promise<any> =>{
    try {
        return await changeState(idSolicitud, estado);
    } catch (error) {
        throw error;
    }
}