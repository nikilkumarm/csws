const express = require('express');
const nodemailer = require('nodemailer');
const router = express.Router();

// @route   POST /api/contact
// @desc    Send contact form email
router.post('/', async (req, res) => {
  const { name, email, phone, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Name, email, and message are required.' });
  }

  // Create email content
  const output = `
    <p>You have a new contact request</p>
    <h3>Contact Details</h3>
    <ul>
      <li>Name: ${name}</li>
      <li>Email: ${email}</li>
      <li>Phone: ${phone || 'Not provided'}</li>
    </ul>
    <h3>Message</h3>
    <p>${message}</p>
  `;

  // Create reusable transporter object using the SMTP transport
  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    secure: false, // true for 465, false for other ports
    auth: {
      user: process.env.EMAIL_USER, // Your email from .env
      pass: process.env.EMAIL_PASS, // Your email app password from .env
    },
  });

  try {
    await transporter.sendMail({
      from: `"${name}" <${process.env.EMAIL_USER}>`, // Sender's name and your email
      to: 'cinelinestudio24@gmail.com', // Your studio's receiving email
      subject: 'New Contact Form Submission from Cineline Studios Website',
      html: output,
    });
    res.status(200).json({ message: 'Message sent successfully.' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ error: 'Server error. Failed to send email.' });
  }
});

module.exports = router;