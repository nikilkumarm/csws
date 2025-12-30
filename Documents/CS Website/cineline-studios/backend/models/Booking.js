const mongoose = require("mongoose");

const BookingSchema = new mongoose.Schema({
  clientName: { type: String, required: true },
  email: { type: String, required: true },
  service: { type: String, required: true },
  date: { type: Date, required: true },
  notes: { type: String, default: "" },

  // Stored filenames from multer
  attachments: { type: [String], default: [] },

  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Booking", BookingSchema);
