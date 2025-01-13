import express from "express";
import registerController from "../../controllers/users/registerController";
import { validationParamsRegister, validationRegister } from "../../middlewares/validators/validatorRegister";
const router = express.Router();


router.post("/", validationParamsRegister, validationRegister, registerController);

export default router;