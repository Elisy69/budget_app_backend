import express from "express";
import router from "./router.js";
const app = express();
app.get("/", (req, res) => {
    res.json({ message: "MAIN ROUTE FOR API" });
});
app.use("users", router);
app.listen(5000, () => {
    console.log("5000 port started");
});
//# sourceMappingURL=server.js.map