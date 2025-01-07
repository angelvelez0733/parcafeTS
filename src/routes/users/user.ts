import express from "express";
import registerController from "../../controllers/users/registerController";
const router = express.Router();


router.post("/", registerController);

export default router;