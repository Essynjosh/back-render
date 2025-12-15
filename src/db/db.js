// src/db/index.js
import dotenv from 'dotenv';
dotenv.config(); // Make sure environment variables are loaded

import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import * as schema from "./schema.js";

// Check if DATABASE_URL is set
if (!process.env.DATABASE_URL) {
  throw new Error("DATABASE_URL is not set. Please add it to your .env file.");
}

const sql = neon(process.env.DATABASE_URL);
export const db = drizzle(sql, { schema });
