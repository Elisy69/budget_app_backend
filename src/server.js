import express from "express";

const app = express();

app.get("/", (req, res) => {
  console.log("hello from express");
  res.status(200);
  res.json({ message: "hello" });
});

app.listen(5000, () => {
  console.log("5000 port started");
});
