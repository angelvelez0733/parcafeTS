import express from "express";
const router = express.Router();

//IMPORTS REGISTER
import registerController from "../../controllers/users/registerController";
import { validationParamsRegister, validationRegister } from "../../middlewares/validators/validatorRegister";

router.post("/", validationParamsRegister, validationRegister, registerController);

//IMPORTS UPDATE BASIC DATA 
import updateController from "../../controllers/users/update";
import validateToken from "../../middlewares/validateToken";

//IMPORT CHANGEPASSWORD
import changePasswordController from '../../controllers/users/changePassword';  
import { validationChangePassword, validationParamsChangePassword } from "../../middlewares/validators/changePassword";


router.put("/update", validateToken(["user"]), updateController.updateUser);

router.put("/",validationChangePassword, validationParamsChangePassword, validateToken(["user"]), changePasswordController);



export default router;