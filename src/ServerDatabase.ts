import express, { Request, Response } from "express";
import conn from "./Connection";
import ContactRoutes from "./routes/ContactRoutes";

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
app.use(ContactRoutes);

// Server Port Running Info
app.listen(port, () => {
  console.log(`server runnning on http://localhost:${port}`);
});
