import { Request, Response } from "express";
import AreaService from "../../services/admin/createArea";
import AreaDto from "../../DTO/area";

class AreaController {
    async createArea(req: Request, res: Response) {
        try {
            const { name, description } = req.body;
            
            const areaDto = new AreaDto(name, description);
            const newArea = await AreaService.createArea(areaDto);

            res.status(201).json({
                status: "success",
                message: "New Area created"
            });

        } catch (error: any) {
            res.status(500).json({
                status: error,
                message: error.message || "Internal server error"
            });
        }

    }
}
export default new AreaController();