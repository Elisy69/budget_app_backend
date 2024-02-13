import express from "express";
// import router from "./router";
const app = express();
app.get("/", (_req, res) => {
    console.log("hello from express");
    res.status(200);
    res.json({ message: "hello" });
});
app.listen(5000, () => {
    console.log("5000 port started");
});
//# sourceMappingURL=server.js.map