const express = require("express");
const multer = require("multer");
const Booking = require("../models/Booking");

const router = express.Router();

// Configure Multer storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    const unique = Date.now() + "-" + file.originalname;
    cb(null, unique);
  }
});

const upload = multer({ storage });

// GET all bookings
router.get("/", async (req, res) => {
  try {
    const bookings = await Booking.find().sort({ createdAt: -1 });
    res.json({ success: true, bookings });
  } catch (err) {
    console.error("GET /bookings error:", err);
    res.status(500).json({ success: false, error: err.message });
  }
});

// CREATE booking
router.post("/", upload.array("attachments", 5), async (req, res) => {
  try {
    console.log("Received booking request:");
    console.log("Body:", req.body);
    console.log("Files:", req.files);

    const newBooking = new Booking({
      clientName: req.body.clientName,
      email: req.body.email,
      service: req.body.service,
      date: req.body.date,
      notes: req.body.notes,
      attachments: req.files?.map(f => f.filename) || []
    });

    await newBooking.save();

    res.json({ success: true, booking: newBooking });
  } catch (err) {
    console.error("POST /bookings error:", err);
    res.status(500).json({ success: false, error: err.message });
  }
});

module.exports = router;
