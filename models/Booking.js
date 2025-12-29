import mongoose from 'mongoose';

const BookingSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    location: String,
    address: String,
    service: { type: String, required: true },
    date: { type: Date, required: true },
    notes: String,
    files: [
        {
            filename: String,
            contentType: String,
            data: String // Base64 encoded data
        }
    ],
    createdAt: { type: Date, default: Date.now }
});

export default mongoose.models.Booking || mongoose.model('Booking', BookingSchema);
