// src/controllers/forms.js
import { db } from "../db/db.js";
import { form_submissions } from "../db/schema.js";

export async function submitForm(data) {
  if (!data || !data.name || !data.email) {
    throw new Error("Name and email are required");
  }

  const { name, email, message } = data;

  try {
    const result = await db
      .insert(form_submissions)
      .values({
        submitter_name: name,
        email,
        message: message || "",
        submitted_at: new Date(),
      })
      .onConflictDoUpdate({
        target: form_submissions.email,
        set: {
          submitter_name: name,
          message: message || "",
          submitted_at: new Date(),
        },
      })
      .returning();

    return result;
  } catch (error) {
    console.error("DB error:", error);
    throw new Error("Database error");
  }
}
