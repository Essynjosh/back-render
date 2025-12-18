import express from "express";
import { submitForm } from "../controllers/forms.js";

const router = express.Router();

router.post("/submit", async (req, res) => {
  try {
    const result = await submitForm(req.body);
   res.status(200).json({ success: true });
  } catch (e) {
    res.status(500).json({ error: "Server error" });
  }
});

export default router;
