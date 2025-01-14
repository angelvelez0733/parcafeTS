import express from "express";
import profileController from "../controllers/profile";
import validateToken from "../middlewares/validateToken";
const router = express.Router();

router.get("/", validateToken(["admin", "user"]), profileController.getProfile);

export default router;