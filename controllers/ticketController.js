// controllers/ticketController.js
const Ticket = require('../models/ticketModel');

// Create Ticket
exports.createTicket = async (req, res) => {
  try {
    const { title, description, assignedTo } = req.body;
    const newTicket = await Ticket.create({ title, description, assignedTo, createdBy: req.user.id });
    res.status(201).json({ message: 'Ticket created successfully', ticket: newTicket });
  } catch (error) {
    res.status(500).json({ message: 'Error creating ticket', error });
  }
};

// Get Tickets
exports.getTickets = async (req, res) => {
  try {
    const tickets = await Ticket.find();
    res.status(200).json({ tickets });
  } catch (error) {
    res.status(500).json({ message: 'Error fetching tickets', error });
  }
};

// Update Ticket
exports.updateTicket = async (req, res) => {
  try {
    const updatedTicket = await Ticket.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json({ message: 'Ticket updated successfully', ticket: updatedTicket });
  } catch (error) {
    res.status(500).json({ message: 'Error updating ticket', error });
  }
};

// Delete Ticket
exports.deleteTicket = async (req, res) => {
  try {
    await Ticket.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: 'Ticket deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting ticket', error });
  }
};
