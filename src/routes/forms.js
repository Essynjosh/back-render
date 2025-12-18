import express from "express";
import { submitForm } from "../controllers/forms.js";

const router = express.Router();

router.post("/submit", async (req, res) => {
  try {
    const result = await submitForm(req.body);

      res.json({ success: true, data: result });
  } catch (err) {
    res.status(400).json({ error: err.message });   
});

export default router;
