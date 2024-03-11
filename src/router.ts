import { Router } from "express";
import { body } from "express-validator";
import { handleInputErrors } from "./modules/middlewares.js";
import { getIncomeCat, createIncomeCat } from "./handlers/categories.js";

const router = Router();

router.put("/incomecat", createIncomeCat);

router.get("/incomecat", getIncomeCat);

export default router;
