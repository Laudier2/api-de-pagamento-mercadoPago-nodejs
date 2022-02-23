import { Router } from "express";
import { crearorden, notificationorden } from "../controller/mercaController.js";

const router = Router();

router.post('/crear-orden', crearorden)
router.get('/notification', notificationorden)

export default router;