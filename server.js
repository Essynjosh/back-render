import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import formRoutes from './src/routes/forms.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Enable CORS for all routes
app.use(cors({
    origin: [
        'http://localhost:5173', // Local development URL
      'https://front-vercel-git-main-essynjosh353-gmailcoms-projects.vercel.app' // Deployed Vercel URL
    ], // <--- The array of origins is closed here

    methods: ['GET','POST','PUT','DELETE'], // <--- COMMA is now correctly separating properties
    
    credentials: true // Recommended if you use cookies or sessions
}));

// Routes
app.use('/api', formRoutes);

// Root route
app.get('/', (req, res) => {
  res.send('Backend Server is running.');
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
