const express = require("express");
const app = express();
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const ticketRoutes = require("./routes/ticketRoutes");

dotenv.config();

// Connect to the database
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/tickets", ticketRoutes); // All routes under /api/tickets

// Default route
app.get("/", (req, res) => {
  res.send("Welcome to the Ticket System!");
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
