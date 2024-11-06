import express from "express";
import { getAllContacts } from "../controller/ContactController";

const router = express.Router();

router.get("/contacts", getAllContacts);

export default router;
