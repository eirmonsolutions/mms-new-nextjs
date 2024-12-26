const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());

// Allowed origins for CORS
const allowedOrigins = [
    'http://localhost:3000',
    'http://192.168.1.8:3000',
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
    credentials: true, // Allow cookies to be sent
}));

// Nodemailer transporter configuration
const transporter = nodemailer.createTransport({
    service: 'gmail', 
    auth: {
        user: 'vishaleirmon15896@gmail.com', 
        pass: 'vpsruvnpklazwbim' 
    }
});

// Route for sending email
app.post('/send-email', (req, res) => {
    const { name, phone, email, message } = req.body;

    if (!name || !phone || !email || !message) {
        return res.status(400).json({ success: false, message: 'All fields are required.' });
    }

    const mailOptions = {
        from: 'vishaleirmon15896@gmail.com',
        to: 'vishaleirmon15896@gmail.com',
        subject: 'New Contact Form Submission',
        text: `
            You have received a new message:
            Name: ${name}
            Phone: ${phone}
            Email: ${email}
            Message: ${message}
        `,
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error('Error sending email:', error);
            return res.status(500).json({ success: false, message: 'Failed to send email.' });
        }
        console.log('Email sent:', info.response);
        return res.status(200).json({ success: true, message: 'Email sent successfully.' });
    });
});

// Start server
const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
