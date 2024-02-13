import { Router } from "express";

const router = Router();

router.get("/", (_req, res) => {
  res.json({ message: "SO THIS IS USERS" });
});

export default router;
