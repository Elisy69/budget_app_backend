import express from "express";
import router from "./router.js";
import morgan from "morgan";
import { protect } from "./modules/auth.js";
import * as dotenv from "dotenv";
dotenv.config();

const app = express();

app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.sendStatus(404);
});

app.use("/users", protect, router);

app.listen(5000, () => {
  console.log("5000 port started");
});
