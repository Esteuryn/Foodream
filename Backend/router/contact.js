const express = require("express");
const nodemailer = require("nodemailer");
const router = express.Router();

router.post("/", async (req, res) => {
  const { name, email, subject, message } = req.body;
console.log(req.body); 

  if (!name || !email || !message) {
    return res.status(400).json({ error: "Please fill all required fields." });
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASS,
    },
  });

  try {
    await transporter.sendMail({
      from: `"${name}" <${email}>`,
      to: process.env.MAIL_USER,
      subject: subject || "New contact form message",
      html: `
        <h3>Message from ${name}</h3>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p>${message}</p>
      `,
    });

    res.json({ success: true, message: "Message sent successfully." });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Something went wrong. Try again later." });
  }
});

module.exports = router;
