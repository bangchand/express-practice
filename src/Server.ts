import express, { Request, Response } from "express";

const app = express();
const fs = require("fs");
const port = 3000;

app.use(express.urlencoded({ extended: true }));

const readData = () => {
  const data = fs.readFileSync("./data.json", "utf-8");
  return JSON.parse(data);
};

const writeData = (data: string) => {
  fs.writeFileSync("./data.json", JSON.stringify(data, null, 2), "utf-8");
};

app.get("/chars", (req, res) => {
  const users = readData();
  res.json(users);
});

app.post("/chars", (req, res) => {
  const users = readData();
  const newUser = req.body;
  users.push(newUser);
  writeData(users);
  res.status(201).json(newUser);
});

app.listen(port, () => {
  console.log(`Server berjalan di http://localhost:${port}`);
});
