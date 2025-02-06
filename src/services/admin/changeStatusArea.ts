import { changeStatusAreaRepo } from "../../repository/admin/changeStatusArea";
import { ChangeStatusAreaItf } from "../../interfaces/changeStatusArea";

export const changeStatusAreaService = async (areaData: ChangeStatusAreaItf): Promise<boolean> => {
    try {
        return await changeStatusAreaRepo(areaData);
    } catch (error) {
        throw error;
    }
};