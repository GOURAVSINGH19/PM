const nodemailer = require("nodemailer");

const PASSWORD_RESET_REQUEST_TEMPLATE = require("../multitrap/EmailTemplate");

const sendMail = async (email, text, OTP) => {
  const transpoter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    service: "gmail",
    secure: true,
    port: 465,
    html: PASSWORD_RESET_REQUEST_TEMPLATE,
    auth: {
      user: process.env.EMAIL,
      pass: process.env.APP_PASSWORD,
    },
  });
  const mailoptions = {
    from: {
      name: "Sprint",
      address: process.env.EMAIL,
    },
    to: email,
    html: `<!DOCTYPE html>
<html lang="en" >
<head>
  <meta charset="UTF-8">
  <title>CodePen - OTP Email Template</title>
  

</head>
<body>
<!-- partial:index.partial.html -->
<div style="font-family: Helvetica,Arial,sans-serif;min-width:1000px;overflow:auto;line-height:2">
  <div style="margin:50px auto;width:70%;padding:20px 0">
    <div style="border-bottom:1px solid #eee">
      <a href="" style="font-size:1.4em;color: #00466a;text-decoration:none;font-weight:600">Koding 101</a>
    </div>
    <p style="font-size:1.1em">Hi,</p>
    <p>Thank you for choosing Koding 101. Use the following OTP to complete your Password Recovery Procedure. OTP is valid for 5 minutes</p>
    <h2 style="background: #00466a;margin: 0 auto;width: max-content;padding: 0 10px;color: #fff;border-radius: 4px;">${OTP}</h2>
    <p style="font-size:0.9em;">Regards,<br />Koding 101</p>
    <hr style="border:none;border-top:1px solid #eee" />
    <div style="float:right;padding:8px 0;color:#aaa;font-size:0.8em;line-height:1;font-weight:300">
      <p>Koding 101 Inc</p>
      <p>1600 Amphitheatre Parkway</p>
      <p>California</p>
    </div>
  </div>
</div>`,
    subject: text,
    text: text,
  };

  await transpoter.sendMail(mailoptions, (err) => {
    if (err) console.log(err);
    else console.log("Email sent successfully");
  });
};

module.exports = sendMail;
