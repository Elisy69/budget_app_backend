import express from "express";
const app = express();
const router = express.Router();
app.get("/", (req, res) => {
    res.json({ message: "asdasdasd hello asdadsasdFUCVK" });
});
app.get("/api/test", (req, res) => {
    res.json({ message: "THIS IS TEST" });
});
router.get("/", (_req, res) => {
    res.json({ message: "YO WHATSAP" });
});
app.use("/users", router);
app.listen(5000, () => {
    console.log("5000 port started");
});
//# sourceMappingURL=server.js.map