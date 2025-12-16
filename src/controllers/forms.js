// src/controllers/forms.js
import { db } from "../db/db.js"; // Your database connection
import { form_submissions } from "../db/schema.js"; // Your table schema

export async function submitForm(req, res) {
  const { name, email, message } = req.body; // Get data from the request body

  // Validation: Check if name and email are provided
  if (!name || !email) {
    return res.status(400).json({ error: "Name and email are required" });
  }

  try {
    // Insert or update the form submission in the database
    const result = await db
      .insert(form_submissions)
      .values({
        submitter_name: name,
        email: email,
        message: message || "", // Use an empty string if message is not provided
        submitted_at: new Date(),
      })
      .onConflictDoUpdate({
        target: form_submissions.email, // Handle conflicts based on email
        set: {
          submitter_name: name,
          message: message || "",
          submitted_at: new Date(),
        },
      })
      .returning(); // Return the inserted/updated row

    // Respond with the result
    return res.json(result);
  } catch (error) {
    // Handle any errors that occur during insertion
    console.error("Database insertion error:", error);
    return res.status(500).json({ error: "Database error" });
  }
}
