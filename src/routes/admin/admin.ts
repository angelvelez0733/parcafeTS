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

//IMPORTS CHANGE STATUS AREA
import { changeStatusAreaController } from "../../controllers/admin/changeStatusArea";
router.put("/update-status-area/:id_area", validateToken(["admin"]), changeStatusAreaController);

//IMPORTS CREATE VACANCY
import { createVacancyController } from "../../controllers/admin/vacancy/create";
import validateVacancy from "../../middlewares/validators/validateVacancy";
router.post("/create-vacancy", validateToken(["admin"]), validateVacancy, createVacancyController);

//IMPORTS CHANGE VACANCY
import { updateVacancyController } from "../../controllers/admin/vacancy/update";
router.put("/update-vacancy", validateToken(["admin"]), updateVacancyController);

//IMPORTS CHANGE STATE REQUESTVACANCY
import { changeStateController } from "../../controllers/admin/requestVacancy/changeState";
router.put("/change-state/:idSolicitud", changeStateController);

export default router;