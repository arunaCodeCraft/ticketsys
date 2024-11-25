// routes/ticketRoutes.js
const express = require('express');
const router = express.Router();
const { createTicket, getTickets, updateTicket, deleteTicket } = require('../controllers/ticketController'); // Ensure this line is correct
const { authMiddleware, authorizeRoles } = require('../middleware/authMiddleware');

// Routes with role-based access
router.post('/', authMiddleware, authorizeRoles('staff', 'admin'), createTicket);
router.get('/', authMiddleware, getTickets);  // Ensure this handler is correctly imported and defined
router.put('/:id', authMiddleware, authorizeRoles('staff', 'admin'), updateTicket);
router.delete('/:id', authMiddleware, authorizeRoles('admin'), deleteTicket);

module.exports = router;
