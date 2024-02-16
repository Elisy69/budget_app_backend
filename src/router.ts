import { Router } from "express";
import { body, validationResult } from "express-validator";
const router = Router();

router.put("/incomecat", body("name"), (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    res.status(400);
    res.json({ errors: errors.array() });
  }
});

export default router;
