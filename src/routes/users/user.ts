import express from "express";
const router = express.Router();

//IMPORTS REGISTER
import registerController from "../../controllers/users/registerController";
import { validationParamsRegister, validationRegister } from "../../middlewares/validators/validatorRegister";

router.post("/", validationParamsRegister, validationRegister, registerController);

//IMPORTS UPDATE BASIC DATA 
import updateController from "../../controllers/users/update";
import validateToken from "../../middlewares/validateToken";

router.put("/update", validateToken(["user"]), updateController.updateUser);



export default router;