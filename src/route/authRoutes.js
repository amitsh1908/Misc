import { renderHome ,loginUser} from "../controller/authController.js";
import { Router } from "express";
const router = Router();

router.get("/", renderHome);
router.post("/",loginUser)

export default router;
