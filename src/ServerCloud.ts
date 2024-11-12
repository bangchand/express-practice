import express, { Request, Response } from "express";
import conn from "./ConnectionCloud";
import TodoRoutes from "./routes/TodoRoutes.ts";
import RecordRoutes from "./routes/RecordRoutes.ts";

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

app.get("/", (req: Request, res: Response) => {
  res.json("server is running");
});

app.use(TodoRoutes);
app.use(RecordRoutes);

app.listen(port, () => {
  console.log(`server runnning on http://localhost:${port}`);
});
