// src/routes/forms.js
import express from "express";
import { submitForm } from "../controllers/forms.js";

const router = express.Router();

router.post("/submit", async (req, res) => {
  console.log("Incoming body:", req.body);

  try {
    const result = await submitForm(req.body);
    res.status(200).json(result);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

export default router;
