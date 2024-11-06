import express, { Request, Response } from "express";
import conn from "./Connection.ts";

const app = express();
const port = 3000;

app.use(express.json());

// Autenticate to database
conn
  .authenticate()
  .then(() => {
    console.log("connected to database!");
  })
  .catch(() => {
    console.log("connection failed to database!");
  });

// API
app.get("/", (req, res) => {
  res.json("connected!");
});

// Server Port Running Info
app.listen(port, () => {
  console.log(`server runnning on http://localhost:${port}`);
});
