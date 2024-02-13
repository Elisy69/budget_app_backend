import express from "express";
const app = express();
const router = express.Router();

app.get("/", (req, res) => {
  console.log("hello from express");
  res.status(200);
  res.json({ message: "hello WTF" });
});

router.get("/users", (_req, res) => {
  res.json({ message: "YO WHATSAP" });
});

app.use("/", router);

app.listen(5000, () => {
  console.log("5000 port started");
});
