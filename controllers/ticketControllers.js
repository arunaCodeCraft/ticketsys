const Ticket = require('../models/Ticket');

// Create a ticket
const createTicket = async (req, res) => {
  try {
    const { title, description, status } = req.body;

    const newTicket = new Ticket({
      title,
      description,
      status: status || 'open',
    });

    const savedTicket = await newTicket.save();
    res.status(201).json({ message: 'Ticket created successfully!', ticket: savedTicket });
  } catch (error) {
    res.status(500).json({ message: 'Error creating ticket', error: error.message });
  }
};

// Get all tickets
const getTickets = async (req, res) => {
  try {
    const tickets = await Ticket.find();
    res.status(200).json({ tickets });
  } catch (error) {
    res.status(500).json({ message: 'Error fetching tickets', error: error.message });
  }
};

// Get a single ticket by ID
const getTicketById = async (req, res) => {
  try {
    const ticket = await Ticket.findById(req.params.id);

    if (!ticket) {
      return res.status(404).json({ message: 'Ticket not found' });
    }

    res.status(200).json({ ticket });
  } catch (error) {
    res.status(500).json({ message: 'Error fetching ticket', error: error.message });
  }
};

// Update a ticket
const updateTicket = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description, status } = req.body;

    const updatedTicket = await Ticket.findByIdAndUpdate(
      id,
      { title, description, status },
      { new: true } // Return the updated document
    );
    if (!updatedTicket) {
      return res.status(404).json({ message: "Ticket not found" });
    }

    res.json({
      message: "Ticket updated successfully!",
      ticket: updatedTicket,
    });
  } catch (error) {
    console.error("Error updating ticket:", error);
    res.status(500).json({ message: "Server error, please try again." });
  }
};

// Delete a ticket
const deleteTicket = async (req, res) => {
  try {
    const ticket = await Ticket.findByIdAndDelete(req.params.id);

    if (!ticket) {
      return res.status(404).json({ message: "Ticket not found" });
    }

    res.json({ message: "Ticket deleted successfully" });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: "Server error" });
  }
};


module.exports = {
  createTicket,
  getTickets,
  getTicketById,
  updateTicket,
  deleteTicket,
};
