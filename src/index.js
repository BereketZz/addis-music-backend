require('dotenv').config();
const express = require('express');
const connectDB = require('./config/db');
const songRoutes = require('./routes/songRoutes');

const app = express();

// Connect to the database
connectDB();

// Middleware to parse JSON
app.use(express.json());

// API routes
app.use('/api', songRoutes);

// Start the server
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
