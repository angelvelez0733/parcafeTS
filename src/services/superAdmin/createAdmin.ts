import { createAdminRepo } from "../../repository/superAdmin/createAdmin";
import generateHash from "../../helpers/generateHash";
import { CreateAdminItf } from "../../interfaces/admin";

class CreateAdminService {
    static async registerAdmin(admin: CreateAdminItf) {
        admin.password = await generateHash(admin.password);
        return createAdminRepo(admin);
    }
}
export default CreateAdminService;