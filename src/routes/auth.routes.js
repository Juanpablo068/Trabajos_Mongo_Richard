import { Router } from "express";
import { register, login, logout, profile } from "../controllers/auth.controller.js";
import { requiredAuth } from "../middlewares/tokenValidation.js";
import { registerSchema, loginschema } from "../schemas/auth.schema.js";
import { validateSchema } from "../middlewares/validator.middleware.js";


const router = Router();

router.post('/register', validateSchema(registerSchema), register);
router.post('/login', validateSchema(loginschema), login);
router.post('/logout', logout);
router.get('/profile',requiredAuth,  profile);

export default router; 