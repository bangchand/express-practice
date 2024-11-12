import { Request, Response } from "express";
import Record from "../models/Record";

export const postRecord = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const newRecord = await Record.create(); // Membuat instance baru dari Record
    res.status(200).json({ data: newRecord, message: "Insert data success!" });
  } catch (error) {
    console.error("Error creating record:", error);
    res.status(500).json({ message: "Server error" });
  }
};
