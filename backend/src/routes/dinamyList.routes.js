import { Router } from "express";
import { authMiddleware } from "../middleware/midd.js";
import { getList } from "../controllers/dynamiList.controller.js";

const router = Router()

router.get('/dynamic', authMiddleware, getList)

export default router;