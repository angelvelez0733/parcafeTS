import { updateArea } from "../../repository/admin/updateArea";
import { UpdateAreaItf } from "../../interfaces/updateArea";

export const updateAreaService = async (data: UpdateAreaItf): Promise<boolean> => {
    try {
        return await updateArea(data);
    } catch (error) {
        throw error;
    }
};