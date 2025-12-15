// src/controllers/forms.js
import { db } from "../db/db.js";
import { form_submissions } from "../db/schema.js";

export async function submitForm(data) {
  if (!data || !data.name || !data.email) {
    throw new Error("Invalid data: name and email are required");
  }

  try {
    const result = await db
      .insert(form_submissions)
      .values({
        submitter_name: data.name,
        email: data.email,
        message: data.message || "",
        submitted_at: new Date(),
      })
      .onConflictDoUpdate({
        target: form_submissions.email,
        set: {
          submitter_name: data.name,
          message: data.message || "",
          submitted_at: new Date(),
        },
      })
      .returning();

    return result;
  } catch (error) {
    console.error("Database insertion error:", error);
    throw error;
  }
}
