import express from "express"
import {MensajePrueba} from "../controllers/user.controller.js"

const router = express.Router();

router.get('/api/mensaje', MensajePrueba )

export default router;