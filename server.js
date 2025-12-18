import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import formRoutes from "./src/routes/forms.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

const whitelist = [
  "https://front-vercel-omega.vercel.app", // Your primary production frontend
  // Add other stable production origins here
  "http://localhost:3000", // For local development
];

const corsOptions = {
  origin: function (origin, callback) {
    // Allow requests with no origin (like mobile apps or curl requests)
    if (!origin) {
      return callback(null, true);
    }

    // Check if the origin is in your static whitelist
    if (whitelist.indexOf(origin) !== -1) {
      return callback(null, true);
    }

    // Check if the origin matches a dynamic Vercel preview pattern
    const vercelPreviewRegex = /^https:\/\/.*-essynjosh353-gmailcoms-projects\.vercel\.app$/;
    // or a more specific one like /^https:\/\/your-project-name(-\w+)*\.vercel\.app$/
    if (origin.match(vercelPreviewRegex)) {
      return callback(null, true);
    }

    // If the origin is not allowed
    const msg = "The CORS policy for this site does not allow access from the specified Origin.";
    callback(new Error(msg), false);
  },
  methods: ["GET", "POST"],
  // credentials: true, // Uncomment if your frontend sends cookies or authorization headers
};

app.use(express.json());
app.use(cors(corsOptions)); // Use the corsOptions object

// Routes
app.use("/api", formRoutes);

// Test route
app.get("/", (req, res) => {
  res.send("Backend Server is running.");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
