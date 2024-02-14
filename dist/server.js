import express from "express";
import router from "./router.js";
import morgan from "morgan";
import { signin } from "./handlers/users.js";
import { createNewUser } from "./handlers/users.js";
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
app.use("/newuser", createNewUser);
app.use("/signin", signin);
app.listen(5000, () => {
    console.log("5000 port started");
});
//# sourceMappingURL=server.js.map