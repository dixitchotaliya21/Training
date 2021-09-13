"use strict";
const nodemailer = require("nodemailer");

// async..await is not allowed in global scope, must use a wrapper
async function main() {
    // Generate test SMTP service account from ethereal.email
    // Only needed if you don't have a real mail account for testing
    let testAccount = await nodemailer.createTestAccount();

    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
            user: "pr3380611@gmail.com", // generated ethereal user
            pass: "Dixit@000", // generated ethereal password
        },
    });

    let mailoption = {
        from: "Prince,pr3380611@gmail.com",
        to: "Dixit, dixitchotaliya05@gmail.com",
        subject: "Your dream car is here.", // Subject line
        text: `Hello Aakash sir,
    Please find your dream car.`,
        attachments: [
            {   // file on disk as an attachment
                filename: 'buggati.jpg',
                path: __dirname + '/buggati.jpg'
            },
        ]
    }


    // send mail with defined transport object
    transporter.sendMail(mailoption, (err, info) => {
        if (err) {
            return console.log(err)
        }
        console.log("E-mail sent" + info.messageId)
    })




}

main().catch(console.error);
console.log("E-mail sent")
