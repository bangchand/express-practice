import express, { Request, Response } from "express";
import conn from "./src/ConnectionCloud";
import TodoRoutes from "./src/routes/TodoRoutes";
import RecordRoutes from "./src/routes/RecordRoutes";

const app = express();
const port = process.env.PORT || 3001;

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

export default app;
