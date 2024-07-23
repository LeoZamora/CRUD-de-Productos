import { Router } from "express";
import { authMiddleware } from "../middleware/midd.js";
import {methods as crud} from './../controllers/crud.controller.js';
import {validations} from '../validations/validation.js'

const router = Router();

router.get('/product/tipo_empaque', authMiddleware, validations.paramsValidator, crud.GetEmp);
router.post('/product/tipo_empaque', authMiddleware, validations.postEmpValidation, crud.PostEmp);
router.get('/product', authMiddleware, crud.GET); 
router.get('/product/categoria', authMiddleware, crud.getCategoria); 
router.post('/product', authMiddleware, validations.postValidation, crud.POST);
router.delete('/product', authMiddleware, validations.deleteValidation, crud.DELETE);
router.put('/product', authMiddleware, validations.putValidation, crud.PUT);


export default router;