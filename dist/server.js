import express from "express";
const app = express();
const router = express.Router();
app.get("/", (req, res) => {
    res.status(200);
    res.json({ message: "hello AFSASDFAFS" });
});
router.get("/users", (_req, res) => {
    res.status(200);
    res.json({ message: "YO WHATSAP" });
});
app.use("/api", router);
app.listen(5000, () => {
    console.log("5000 port started");
});
//# sourceMappingURL=server.js.map