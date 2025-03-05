import express from "express";
import { logout } from "../controllers/logout";
import validateToken from "../middlewares/validateToken";
const router = express.Router();

router.post("/logout", validateToken(["user", "admin", "superadmin"]), logout);

export default router;