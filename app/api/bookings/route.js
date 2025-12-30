import { NextResponse } from 'next/server';
import dbConnect from '../../../lib/mongodb';
import Booking from '../../../models/Booking';

export async function POST(req) {
    try {
        await dbConnect();

        const formData = await req.formData();

        // Extract fields
        const name = formData.get('name');
        const email = formData.get('email');
        const phone = formData.get('phone');
        const location = formData.get('location');
        const address = formData.get('address');
        const service = formData.get('service');
        const date = formData.get('date');
        const notes = formData.get('notes');

        const parsedDate = new Date(date);
        if (isNaN(parsedDate.getTime())) {
            return NextResponse.json({ error: 'Invalid or missing date' }, { status: 400 });
        }

        // Handle File Uploads
        // Since Vercel filesystem is ephemeral, we'll convert small files to Base64
        // WARNING: This is not ideal for large files (Vercel function limit is 4.5MB for req body usually)
        const files = formData.getAll('attachments');
        const processedFiles = [];

        for (const file of files) {
            if (file && file.size > 0) {
                // limit file size to avoid exploding DB or Payload limits (e.g., 5MB)
                if (file.size > 5 * 1024 * 1024) {
                    console.warn(`File ${file.name} is too large, skipping.`);
                    continue;
                }

                const buffer = Buffer.from(await file.arrayBuffer());
                const base64Data = buffer.toString('base64');

                processedFiles.push({
                    filename: file.name,
                    contentType: file.type,
                    data: base64Data
                });
            }
        }

        const booking = await Booking.create({
            name,
            email,
            phone,
            location,
            address,
            service,
            date: parsedDate,
            notes,
            files: processedFiles
        });

        return NextResponse.json({
            message: 'Booking saved successfully!',
            data: booking
        }, { status: 201 });

    } catch (error) {
        console.error('Error in /api/bookings:', error);
        return NextResponse.json({
            error: `Failed to save booking: ${error.message}`
        }, { status: 500 });
    }
}
