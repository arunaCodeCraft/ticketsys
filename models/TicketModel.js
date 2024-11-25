// models/ticketModel.js
const mongoose = require('mongoose');

const ticketSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  status: { 
    type: String,
    enum: ['open', 'in progress', 'closed'],
    default: 'open' 
  },
  assignedTo: { 
    type: String, 
    enum: ['office staff', 'electrician', 'bus admin', 'cleaner', 'hostel', 'library'],
    required: true 
  },
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
}, { timestamps: true });

module.exports = mongoose.model('Ticket', ticketSchema);
