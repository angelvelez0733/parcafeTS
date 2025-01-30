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

router.post("/cv", uploadCv.single("cv"), validateToken(["user"]), controller.handle.bind(controller));

export default router;