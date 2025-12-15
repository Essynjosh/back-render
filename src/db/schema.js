// src/db/schema.js
import { pgTable, serial, text, timestamp } from "drizzle-orm/pg-core";

export const form_submissions = pgTable("form_submissions", {
  id: serial("id").primaryKey(),

  submitter_name: text("submitter_name").notNull(),

  email: text("email").notNull().unique(),

  message: text("message"),

  submitted_at: timestamp("submitted_at").defaultNow(),
});
