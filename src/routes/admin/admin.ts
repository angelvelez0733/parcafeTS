import express from "express";
const router = express.Router();
import validateToken from "../../middlewares/validateToken";

//IMPORTS create Area
import AreaController from "../../controllers/admin/createArea";

router.post("/create-area", validateToken(["admin"]), AreaController.createArea);

//IMPORTS GET ALL AREAS
import { getAllAreasController } from "../../controllers/admin/getAllAreas";
router.get("/get-areas", validateToken(["admin"]), getAllAreasController);

//IMPORTS GET AREAS BY STATUS
import { getAreasByStatusController } from "../../controllers/admin/getAreaByStatus";
router.get("/get-areas/:status", validateToken(["admin"]), getAreasByStatusController);

//IMPORTS UPDATED AREA
import { updateAreaController } from "../../controllers/admin/updateArea";
import { validateUpdateArea } from "../../middlewares/validators/validateUpdateArea";
router.put("/update-area/:id_area", validateToken(["admin"]), validateUpdateArea, updateAreaController);

export default router;