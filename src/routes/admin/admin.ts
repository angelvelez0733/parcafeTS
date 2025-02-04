import express from "express";
const router = express.Router();
import validateToken from "../../middlewares/validateToken";

//IMPORTS create Area
import AreaController from "../../controllers/admin/createArea";

router.post("/create-area", validateToken(["admin"]), AreaController.createArea);

export default router;