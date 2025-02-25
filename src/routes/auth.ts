import express from "express";
import auth from "../controllers/authController";
import { validator, validationParams } from "../middlewares/authValidator";
const router = express.Router();

router.post("/", validationParams, validator, auth);

export default router;
