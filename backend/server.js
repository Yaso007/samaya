const express = require("express");
const path = require("path");
const cors = require("cors");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer")
require('dotenv').config();

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(express.static("public")); // Serve static files from "public" folder

// API Route to handle form submission
app.post("/api/submit", async (req, res) => {
    const { username, email, phone, destination, duration } = req.body;

    if (!username || !email || !phone || !destination || !duration) {
        return res.status(400).json({ message: "All fields are required" });
    }

    console.log("Received Booking:", req.body);
    //res.json({ message: "Booking received successfully!" });

    // Nodemailer transporter using Gmail
    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: process.env.EMAIL, // Your Gmail address
            pass: process.env.PASSWORD, // Your Gmail app password
        },
    });

    const mailOptions = {
        from: process.env.EMAIL,
        to: "yashopmukhiazz007@gmail.com", // Change to recipient email
        subject: "New Booking Request",
        text: `New Booking Details:\n\n
        Name: ${username}
        Email: ${email}
        Phone: ${phone}
        Destination: ${destination}
        Duration: ${duration} days
        `,
    };

    try {
        await transporter.sendMail(mailOptions);
        res.status(200).json({ message: "Email sent successfully!" });
    } catch (error) {
        console.error("Email Error:", error);
        res.status(500).json({ error: "Failed to send email" });
    }
});

// Serve the frontend HTML file
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "frontend", "index.html"));
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});

