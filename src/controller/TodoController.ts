import { Request, Response } from "express";
import { Todo } from "../models/Todo";

export const getAllTodo = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const todos = await Todo.findAll();
    res.status(200).json({ data: todos, message: "success" });
  } catch (error) {
    console.log(error);
    res.status(500).json("server error");
  }
};

export const postTodo = async (req: Request, res: Response): Promise<void> => {
  const { title, description } = req.body;

  try {
    const newTodo = await Todo.create({ title, description });
    res.status(200).json({ data: newTodo, message: "insert data success!" });
  } catch (error) {
    console.log(error);
    res.status(500).json("server error");
  }
};
