import { Router } from "express";
import { body } from "express-validator";
import { handleInputErrors } from "./modules/middlewares.js";
const router = Router();

router.put(
  "/incomecat",
  body("name").isString(),
  handleInputErrors,
  (req, res) => {
    console.log("HELLO INCOME CAT!");
  },
);

export default router;
