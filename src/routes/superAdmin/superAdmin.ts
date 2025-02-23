import express from "express";
import { createAdminController } from "../../controllers/superAdmin/createAdmin";
import { validator, validationParams } from "../../middlewares/authValidator";
import validateUserCreation from "../../middlewares/validators/createUsersOfSuperAdmin";
import validateToken from "../../middlewares/validateToken";

const router = express.Router();

router.post("/register-admin", validateToken(["superadmin"]), validateUserCreation, createAdminController);

export default router;