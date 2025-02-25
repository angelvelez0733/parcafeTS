import express from "express";
const router = express.Router();
import validateToken from "../../middlewares/validateToken";

//IMPORTS REGISTER
import registerController from "../../controllers/users/registerController";
import { validationParamsRegister, validationRegister } from "../../middlewares/validators/validatorRegister";

router.post("/", validationParamsRegister, validationRegister, registerController);

//IMPORTS UPDATE BASIC DATA 
import updateController from "../../controllers/users/update";

router.put("/update", validateToken(["user"]), updateController.updateUser);

//IMPORT CHANGEPASSWORD
import changePasswordController from '../../controllers/users/changePassword';  
import { validationChangePassword, validationParamsChangePassword } from "../../middlewares/validators/changePassword";

router.put("/",validationChangePassword, validationParamsChangePassword, validateToken(["user"]), changePasswordController);

//IMPORT UPLOAD CV
import { UploadCvController } from "../../controllers/users/uploadCv";
import { uploadCv } from "../../middlewares/configMulter";
const controller = new UploadCvController();

router.post("/cv", validateToken(["user"]), uploadCv.single("cv"), controller.handle.bind(controller));

//IMPORTS GET ALL AREAS WITH STATUS: ACTIVE
import { getAllAreasControllerUser } from "../../controllers/users/getAllAreas";
router.get("/get-areas", validateToken(["user"]), getAllAreasControllerUser);

//IMPORT CREATE APPLICATION OF VACANCY
import { createApplicationController } from "../../controllers/users/createSolicitud";
import { validateApplication } from "../../middlewares/validators/validateSolicitud";
router.post("/solicitud", validateToken(["user"]), validateApplication, createApplicationController)

//IMPORT GET VACANCIES
import { getVacancyUserController } from "../../controllers/users/getVacancy";
router.get("/get-vacancies", getVacancyUserController);

//IMPORT GET VACANCIES BY AREA
import { getVacanciesByAreaController } from "../../controllers/users/getVacanciesByAreas";
router.get("/vacancies/area/:areaName", validateToken(["user", "admin", "superadmin"]), getVacanciesByAreaController);

export default router;