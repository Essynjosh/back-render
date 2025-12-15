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
  origin: 'http://localhost:5173', // allow your frontend origin
  methods: ['GET','POST','PUT','DELETE'],
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
