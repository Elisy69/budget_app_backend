import express from "express";
const app = express();
const router = express.Router();

app.get("/", (req, res) => {
  res.json({ message: "hello asdadsasdFUCVK" });
});

app.get("/test", (req, res) => {
  res.json({ message: "THIS IS TEST" });
});

router.get("/", (_req, res) => {
  res.json({ message: "YO WHATSAP" });
});

app.use("/users", router);

app.listen(5000, () => {
  console.log("5000 port started");
});
