import { getAreasByStatus } from "../../repository/admin/getAreaByStatus";
import { AreasItf } from "../../interfaces/getAllAreas";

export const getAreasByStatusService = async (status: "activo" | "inactivo"): Promise<AreasItf[]> => {
    try {
        return await getAreasByStatus(status);
    } catch (error) {
        throw error;
    }
};