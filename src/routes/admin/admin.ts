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

//IMPORTS UPDATE VACANCY
import { updateVacancyController } from "../../controllers/admin/vacancy/update";
router.put("/update-vacancy", validateToken(["admin"]), updateVacancyController);

//IMPORTS CHANGE DATE
import { changeDateController } from "../../controllers/admin/vacancy/changeDate";
import validateDate from "../../middlewares/validators/changeDate";
router.put("/change-date", validateToken(["admin"]), validateDate, changeDateController);


//IMPORTS CHANGE STATE VACANCY
import { changeStateVacancyController } from "../../controllers/admin/vacancy/changeState";
router.put("/vacancy/changeState/:id_vacancy", validateToken(["admin"]), changeStateVacancyController);

//IMPORT ENDING VACANCY
import { finalizeVacancyController } from "../../controllers/admin/vacancy/ending";
router.put("/vacancy/:id_vacante/finalize", validateToken(["admin"]), finalizeVacancyController);

//IMPORTS CHANGE STATE APPLICATION (REQUEST VACANCY)
import { changeStateController } from "../../controllers/admin/requestVacancy/changeState";
router.put("/change-state/:idSolicitud", validateToken(["admin", "superadmin"]), changeStateController);

//IMPORT GET APPLICATION
import { getApplicationController } from "../../controllers/admin/application/getSolicitudes";
router.get("/solicitudes", validateToken(["admin", "superadmin"]), getApplicationController);

//IMPORT GET CV_PATH
import { getCvController } from "../../controllers/admin/application/getCv";
router.get("/cv/:userId", validateToken(["admin", "superadmin"]), getCvController);

export default router;