require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const multer = require('multer');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 5001;
const MONGO_URI =
  process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/cineline_bookings';

// ===== Middleware =====
app.use(cors({
  origin: process.env.CORS_ORIGIN || '*'
}));
app.use(express.json());

// ===== Uploads dir (absolute) =====
const uploadDir = path.join(__dirname, 'uploads');
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}

// Serve uploaded files publicly
app.use('/uploads', express.static(uploadDir));

// ===== Multer config =====
const storage = multer.diskStorage({
  destination: (_req, _file, cb) => cb(null, uploadDir),
  filename: (_req, file, cb) => {
    const safeName = file.originalname.replace(/\s+/g, '_');
    cb(null, `${Date.now()}-${safeName}`);
  }
});
const upload = multer({ storage });

// ===== Mongoose schema =====
const BookingSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  location: String,
  address: String,
  service: { type: String, required: true },
  date: { type: Date, required: true },
  notes: String,
  files: [String],
  createdAt: { type: Date, default: Date.now }
});

const Booking = mongoose.model('Booking', BookingSchema);

// ===== API Route =====
app.post('/bookings', upload.array('attachments'), async (req, res) => {
  try {
    const { name, email, phone, location, address, service, date, notes } = req.body;

    const parsedDate = new Date(date);
    if (isNaN(parsedDate.getTime())) {
      return res.status(400).json({ error: 'Invalid or missing date' });
    }

    const filePaths = (req.files || []).map(
      file => `/uploads/${path.basename(file.path)}`
    );

    const booking = await Booking.create({
      name,
      email,
      phone,
      location,
      address,
      service,
      date: parsedDate,
      notes,
      files: filePaths
    });

    console.log(`📩 New booking from ${name} (${email})`);
    res.status(201).json({
      message: 'Booking saved successfully!',
      data: booking
    });

  } catch (err) {
    console.error('❌ Error saving booking:', err);
    res.status(500).json({ error: 'Failed to save booking. Please try again.' });
  }
});

// ===== Connect DB & start server =====
async function startServer() {
  try {
    mongoose.set('strictQuery', false);

    await mongoose.connect(MONGO_URI, {
      serverSelectionTimeoutMS: 5000
    });

    console.log('✅ MongoDB connected successfully');

    app.listen(PORT, () => {
      console.log(`🚀 Server running on http://localhost:${PORT}`);
    });

  } catch (err) {
    console.error('❌ MongoDB connection failed:', err.message);
    process.exit(1);
  }
}

startServer();

// ===== Graceful shutdown =====
process.on('SIGINT', async () => {
  console.log('🛑 SIGINT received — closing MongoDB connection');
  await mongoose.disconnect();
  process.exit(0);
});
