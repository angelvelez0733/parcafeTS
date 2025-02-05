import AreaRepository from "../../repository/admin/createArea";
import AreaDto from "../../DTO/area";

class AreaService {
    async createArea(areaDto: AreaDto) {
        try {
            const newAreaId = await AreaRepository.createArea(areaDto);
            
            return {id: newAreaId, name: areaDto.name};
        } catch (error) {
            throw new Error("Error creating area");
        }
    }
}
export default new AreaService();