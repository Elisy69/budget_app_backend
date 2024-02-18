import { Router } from "express";
import { body } from "express-validator";
import { handleInputErrors } from "./modules/middlewares.js";
const router = Router();
router.put("/incomecat", body("name").isString(), handleInputErrors, (req, res) => { });
export default router;
//# sourceMappingURL=router.js.map