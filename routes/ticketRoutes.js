const express = require('express');
const router = express.Router();
const {
  createTicket,
  getTickets,
  getTicketById,
  updateTicket,
  deleteTicket,
} = require('../controllers/ticketControllers');

// Route definitions
router.post('/', createTicket);           // Create ticket
router.get('/', getTickets);              // Get all tickets
router.get('/:id', getTicketById);        // Get ticket by ID
router.put('/:id', updateTicket);         // Update ticket
router.delete('/:id', deleteTicket);      // Delete ticket

module.exports = router;

