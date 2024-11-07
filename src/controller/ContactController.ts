import { Request, Response } from "express";
import { Contact } from "../models/Contact";

export const getAllContacts = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const contacts = await Contact.findAll();
    res.status(200).json(contacts);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const getContact = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { id } = req.params;
  try {
    const contact = await Contact.findByPk(id);
    res.status(200).json(contact);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const postContact = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { name, gender } = req.body;

  res.json({
    name,
    gender,
  });
  try {
    const newContact = await Contact.create({ name, gender });
    res.status(200).json({
      data: newContact,
      message: "insert data success!",
    });
  } catch (error) {
    res.status(500).json(error);
  }
};

export const putContact = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { id } = req.params;
  const { name, gender } = req.body;

  if (!name || !gender) {
    res.status(400).json({ message: "name and gender" });
  }

  try {
    const contact = await Contact.findByPk(id);

    if (!contact) {
      res.status(404).json({ message: "contact not found!" });
    }

    if (contact !== null && contact !== undefined) {
      contact.name = name;
      contact.gender = gender;

      await contact.save();
      res.status(200).json({ data: contact, message: "update data success!" });
    }
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

export const deleteContact = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { id } = req.params;

  try {
    const contact = await Contact.findByPk(id);

    if (!contact) {
      res.status(404).json({ message: "contact not found!" });
      return;
    }

    if (contact !== null && contact !== undefined) {
      await contact.destroy();
      res.status(200).json({ message: "delete contact success!" });
    }
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};
