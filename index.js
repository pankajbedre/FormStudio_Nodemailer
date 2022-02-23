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
    subject: "You have successfully submited the Form",
    html: `<div style='display: flex; width: 100%; justify-content: center;'>
    <div style='padding: 1.5em; display: inline-block; box-shadow: 2px 2px 10px #0f46461c; border-radius: .3em; margin-top: 2em;'>
        <img width='150px' src='https://formstudio.io/form-studio-logo.svg' alt=''>

        <h4 style='font-family:Verdana, Geneva, Tahoma, sans-serif; font-weight: 200'>Hey, <br> You have successfully submited the form!</h4>
        <h3 style='font-family:Verdana, Geneva, Tahoma, sans-serif; font-weight: 300; margin-top: 3em;'>Easily Create Customizable <br> Forms, Quizs, Surveys and much more... </h3>

        <a target='blank' href='https://formstudio.io' style='font-family:Verdana, Geneva, Tahoma, sans-serif; background-color: #06a0a0; color: #fff; border: none; padding: .7em 1.5em; font-size: 1.2em; border-radius: .2em; margin-top: .5em; display: inline-block; text-decoration: none;'>Go To FormStudio</a>
        </div>
    </div>`
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