import express from "express";
const app = express();
const router = express.Router();

router.get("/users", (_req, res) => {
  res.json({ message: "YO WHATSAP" });
});

app.use("/", router);

app.listen(5000, () => {
  console.log("5000 port started");
});
