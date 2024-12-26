// server.js (Node.js Backend)

const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

const transporter = nodemailer.createTransport({
    service: 'gmail', 
    auth: {
        user: 'vishaleirmon15896@gmail.com', 
        pass: 'vpsruvnpklazwbim' 
    }
});

app.post('/send-email', (req, res) => {
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
