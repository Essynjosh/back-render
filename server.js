import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import formRoutes from "./src/routes/forms.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());

app.use(
  cors({
    origin: [
      "https://front-vercel-8gba70mld-essynjosh353-gmailcoms-projects.vercel.app",
    ],
    methods: ["GET", "POST"],
  })
);

// Routes
app.use("/api", formRoutes);

// Test route
app.get("/", (req, res) => {
  res.send("Backend Server is running.");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
