import express from "express";
import { getAllTodo, postTodo } from "../controller/TodoController";

const router = express.Router();

router.get("/todos", getAllTodo);
router.post("/todo", postTodo);

export default router;
