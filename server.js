import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import formRoutes from './src/routes/forms.js'; // Make sure this points to the correct file

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json()); // to parse JSON request bodies

// Enable CORS for all routes
app.use(cors({
  origin: [
    'http://localhost:5173', // for local testing
    'https://front-vercel-5kje41g66-essynjosh353-gmailcoms-projects.vercel.app' // production frontend URL on Vercel
  ],
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true,
}));

// Routes
app.use('/api', formRoutes); // routes that handle form submissions

// Root route
app.get('/', (req, res) => {
  res.send('Backend Server is running.');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
