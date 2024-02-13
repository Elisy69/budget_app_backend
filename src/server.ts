import express from "express";
import router from "./router";
const app = express();

app.use("/", router);

app.listen(5000, () => {
  console.log("5000 port started");
});
