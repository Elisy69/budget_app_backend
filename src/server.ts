import express from "express";
import router from "./router.js";
import morgan from "morgan";
import { signin } from "./handlers/users.js";
import { createNewUser } from "./handlers/users.js";
import { protect } from "./modules/auth.js";
import * as dotenv from "dotenv";
dotenv.config();

const PORT = 5000;
const app = express();

app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.sendStatus(404);
});

app.use("/data", protect, router);

app.post("/newuser", createNewUser);
app.post("/signin", signin);

app.listen(PORT, () => {
  console.log(`Server on ${PORT} port started`);
});
