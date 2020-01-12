
const sgMail = require('@sendgrid/mail');
var bodyParser = require('body-parser');
const express = require('express');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

exports.handler = (event, context, callback) => {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
  const usermsg = {
    to: 'zechnwhite@gmail.com',
    from: 'zechnwhite@gmail.com',
    subject: 'Thank you for emailing me!',
    text: 'lambda',
    html: `<h4 style="color: green";">Success!</h4><p>Hey it's Zach,</p><p>Just wanted to say thank you for filling out my contact form.</p>}`
  };
  sgMail
    .send(usermsg)
    .then(() => {
      const adminmsg = {
        to: 'zechnwhite@gmail.com',
        from: 'zechnwhite@gmail.com',
        subject: 'someone contacted you',
        text: 'waddup',
        html: `<h4 style="color: #5e9ca0;">Someone messaged you and wrote:</h4><p>hello</p>`
      };
      sgMail.send(adminmsg);
    })
    .catch(error => {
      console.log('error');
    })
}

// refactored from my repo 'lambda-node-test' or whatever it's called
