import express from "express";
import { getAllTodo, postTodo } from "../controller/TodoController";
import { postRecord } from "../controller/RecordController";

const router = express.Router();

router.post("/record", postRecord);

export default router;
