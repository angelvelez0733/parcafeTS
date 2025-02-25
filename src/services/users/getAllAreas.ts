import { getAllAreasRepoUser } from "../../repository/users/getAllAreas";
import { AreasItf } from "../../interfaces/getAllAreas";

export const getAllAreasServiceUser = async(): Promise<AreasItf[]> => {
    try {
        return getAllAreasRepoUser();
    } catch (error) {
        throw new Error("Error in service");
    }
};