import { Router } from "express";
import { get, auth , postUser} from "../controllers/auth.controllers.js";
import { validations } from "../validations/validation.js";
import { authMiddleware } from "../middleware/midd.js";

const router = Router();

router.get('/auth', get)
router.post('/auth/register', validations.postUserValidation, postUser)
router.post('/auth', validations.authValidation, auth)

export default router;