const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();

// Middleware to parse JSON requests
app.use(express.json());

// Allowed origins for CORS
const allowedOrigins = [
    'http://localhost:3000',
    'http://192.168.1.8:3000',
    'https://mmsliquor.com/',
    
];

// CORS Configuration
app.use(cors({
    origin: (origin, callback) => {
        if (!origin || allowedOrigins.includes(origin)) {
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    },
    credentials: true,
}));

// Nodemailer transporter configuration
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'eirmonsolutions06@gmail.com',
        pass: 'lsxazawjkddeeueq',
    },
});

// Route for sending email
app.post('/send-email', async (req, res) => {
    try {
        const { firstName, phone, email, message } = req.body;

        // Validate input
        if (!firstName || !phone || !email || !message) {
            return res.status(400).json({ success: false, message: 'All fields are required.' });
        }

        // Configure email options
        const mailOptions = {
            from: 'info@mmsliquor.com',
            to: 'info@mmsliquor.com',
            subject: 'New Contact Form Submission',
            text: `
                You have received a new message:
                Name: ${firstName}
                Phone: ${phone}
                Email: ${email}
                Message: ${message}
            `,
        };

        // Send email
        const info = await transporter.sendMail(mailOptions);
        console.log('Email sent:', info.response);
        return res.status(200).json({ success: true, message: 'Email sent successfully.' });

    } catch (error) {
        console.error('Error sending email:', error);
        return res.status(500).json({ success: false, message: 'Failed to send email.' });
    }
});

// Start server
const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
