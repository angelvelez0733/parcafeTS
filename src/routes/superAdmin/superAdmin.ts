import express from "express";
import validateToken from "../../middlewares/validateToken";

const router = express.Router();

//IMPORTS CREATE USERS FOR SUPER ADMIN
import validateUserCreation from "../../middlewares/validators/createUsersOfSuperAdmin";
import { createAdminController } from "../../controllers/superAdmin/createAdmin";
router.post("/register-admin", validateToken(["superadmin"]), validateUserCreation, createAdminController);

//IMPORTS create Area
import AreaController from "../../controllers/admin/createArea";

router.post("/create-area", validateToken(["superadmin"]), AreaController.createArea);

//IMPORTS GET ALL AREAS
import { getAllAreasController } from "../../controllers/admin/getAllAreas";
router.get("/get-areas", validateToken(["superadmin"]), getAllAreasController);

//IMPORTS GET AREAS BY STATUS
import { getAreasByStatusController } from "../../controllers/admin/getAreaByStatus";
router.get("/get-areas/:status", validateToken(["superadmin"]), getAreasByStatusController);

//IMPORTS UPDATED AREA
import { updateAreaController } from "../../controllers/admin/updateArea";
import { validateUpdateArea } from "../../middlewares/validators/validateUpdateArea";
router.put("/update-area/:id_area", validateToken(["superadmin"]), validateUpdateArea, updateAreaController);

//IMPORTS CHANGE STATUS AREA
import { changeStatusAreaController } from "../../controllers/admin/changeStatusArea";
router.put("/update-status-area/:id_area", validateToken(["superadmin"]), changeStatusAreaController);

//IMPORTS CREATE VACANCY
import { createVacancyController } from "../../controllers/admin/vacancy/create";
import validateVacancy from "../../middlewares/validators/validateVacancy";
router.post("/create-vacancy", validateToken(["superadmin"]), validateVacancy, createVacancyController);

//IMPORTS UPDATE VACANCY
import { updateVacancyController } from "../../controllers/admin/vacancy/update";
router.put("/update-vacancy", validateToken(["superadmin"]), updateVacancyController);

//IMPORTS CHANGE DATE
import { changeDateController } from "../../controllers/admin/vacancy/changeDate";
import validateDate from "../../middlewares/validators/changeDate";
router.put("/change-date", validateToken(["superadmin"]), validateDate, changeDateController);

//IMPORTS CHANGE STATE VACANCY
import { changeStateVacancyController } from "../../controllers/admin/vacancy/changeState";
router.put("/vacancy/changeState/:id_vacancy", validateToken(["superadmin"]), changeStateVacancyController);

//IMPORT ENDING VACANCY
import { finalizeVacancyController } from "../../controllers/admin/vacancy/ending";
router.put("/vacancy/:id_vacante/finalize", validateToken(["superadmin"]), finalizeVacancyController);

//IMPORTS CHANGE STATE APPLICATION (REQUEST VACANCY)
import { changeStateController } from "../../controllers/admin/requestVacancy/changeState";
router.put("/change-state/:idSolicitud", validateToken(["superadmin"]), changeStateController);

//IMPORT GET APPLICATION
import { getApplicationController } from "../../controllers/admin/application/getSolicitudes";
router.get("/solicitudes", validateToken(["superadmin"]), getApplicationController);

//IMPORT GET CV_PATH
import { getCvController } from "../../controllers/admin/application/getCv";
router.get("/cv/:userId", validateToken(["superadmin"]), getCvController);

//IMPORT GET REQUEST BY VACANCIES
import { getRequestController } from "../../controllers/admin/requestVacancy/getRequests";
router.get("/get-requests/:idVacante", validateToken(["superadmin"]), getRequestController);

//IMPORT GET VACANCIES BY AREA
import { getVacanciesByAreaController } from "../../controllers/users/getVacanciesByAreas";
router.get("/vacancies/area/:areaName", validateToken(["superadmin"]), getVacanciesByAreaController);

export default router;