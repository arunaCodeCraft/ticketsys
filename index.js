// index.js
const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const ticketRoutes = require('./routes/ticketRoutes');

dotenv.config();
const app = express();

app.use(express.json());  // Middleware for parsing JSON data
app.use('/api/tickets', ticketRoutes);

// Default route
app.get('/', (req, res) => res.send('Welcome to the Ticketing System API'));

// MongoDB connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
