import { changeDateItf } from "../../../interfaces/changeDate";
import { changeDates } from "../../../repository/admin/vacancy/changeDate";

export const changeDateService = async (changeDate: changeDateItf) => {
    try {
        return await changeDates(changeDate);
    } catch (error) {
        if (error instanceof Error) {
            console.error("Error changing date of vacancy", error.message);
        } else {
            console.error("Unknown error:", error);
        }
        throw error;
    }
}