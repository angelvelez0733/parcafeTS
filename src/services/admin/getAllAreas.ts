import { getAllAreasRepo } from "../../repository/admin/getAllAreas";
import { AreasItf } from "../../interfaces/getAllAreas";

export const getAllAreasService = async(): Promise<AreasItf[]> => {
    try {
        return await getAllAreasRepo();
    } catch (error) {
        throw new Error("Error in service");
    }
};

