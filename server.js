// server.js (Node.js Backend)

const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
var cors = require('cors')
app.use(cors())
const app = express();
app.use(bodyParser.json());

const corsOptions  = [
    'http://localhost:3000',
    'http://192.168.1.8:3000/'
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

const transporter = nodemailer.createTransport({
    service: 'gmail', 
    auth: {
        user: 'vishaleirmon15896@gmail.com', 
        pass: 'vpsruvnpklazwbim' 
    }
});

app.post('/send-email', cors(corsOptions),  (req, res) => {
    const { firstName, phone, email, message } = req.body;

    const mailOptions = {
        from: email,
        to: 'vishaleirmon15896@gmail.com', 
        subject: 'New Contact Form Submission',
        text: `You have received a new message from ${firstName}.\n\nPhone: ${phone}\nEmail: ${email}\nMessage: ${message}`
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
            return res.status(500).json({ success: false });
        } else {
            console.log('Email sent: ' + info.response);
            return res.status(200).json({ success: true });
        }
    });
});

app.listen(5000, () => {
    console.log('Server is running on port 5000');
});
