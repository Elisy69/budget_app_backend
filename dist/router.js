import { Router } from "express";
const router = Router();
router.get("/", (_req, res) => {
    res.json({ message: "users home page" });
});
export default router;
//# sourceMappingURL=router.js.map