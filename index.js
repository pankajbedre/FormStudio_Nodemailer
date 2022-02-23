const express = require("express");
const app = express();
const dotenv = require("dotenv");

dotenv.config();

const nodemailer = require("nodemailer");

var sender = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.MAIL_ID,
        pass: process.env.MAIL_PASS
    }
});

var mail = {
    from: "pankajbedre06@gmail.com",
    to: "pankajbedre22@gmail.com",
    subject: "Sending Email using Node.js",
    text: "That was easy! 12345",
    html: "<h1>Hello</h1>"
};


app.post("/", (req, res) => {
    sender.sendMail(mail, function (error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log("Email sent successfully: "
                + info.response);
            res.send("Mail sent");
        }
    });
})

app.listen(8800, () => {
    console.log("Server is running");
})