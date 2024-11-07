import express from "express";
import {
  deleteContact,
  getAllContacts,
  getContact,
  postContact,
  putContact,
} from "../controller/ContactController";

const router = express.Router();

router.get("/contacts", getAllContacts);
router.get("/contact/:id", getContact);
router.post("/contact", postContact);
router.put("/contact/:id", putContact);
router.delete("/contact/:id", deleteContact);

export default router;
