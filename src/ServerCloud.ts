import express from "express";
import conn from "./ConnectionCloud";
import TodoRoutes from "./routes/TodoRoutes.ts";

const app = express();
const port = 3000;

app.use(express.json());

conn
  .authenticate()
  .then(() => {
    console.log("connected to database!");
  })
  .catch(() => {
    console.log("connection failed to database!");
  });

app.use(TodoRoutes);

app.listen(port, () => {
  console.log(`server runnning on http://localhost:${port}`);
});
