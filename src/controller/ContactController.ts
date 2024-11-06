import { Request, Response } from "express";
import { Contact } from "../models/Contact";

export const getAllContacts = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const contacts = await Contact.findAll();
    res.status(200).json("success");
  } catch (error) {
    res.status(500).json("failed");
  }
};
