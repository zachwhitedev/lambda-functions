const cors = require('cors');
const sgMail = require('@sendgrid/mail');
var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());

exports.handler = (event, context, callback) => {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
  const usermsg = {
    to: req.body.email,
    from: 'zechnwhite@gmail.com',
    subject: 'Thank you for emailing me!',
    text: req.body.message,
    html: `<h4 style="color: green";">Success!</h4><p>Hey it's Zach,</p><p>Just wanted to say thank you for filling out my contact form. If you're reading this email, it means I successfully received this message from you:</p><p style="font-size: 10pt; font: gray"> <b style="font-family: Courier New">${req.body.message}</b></p><p>Thanks!</p><br><br><p>Zach White</p><span>zechnwhite@gmail.com</span><br><span>www.zachwhite.dev<span>`
    // html: '<h1 style="color: #5e9ca0;">You can edit <span style="color: #2b2301;">this demo</span> text!</h1> <h2 style="color: #2e6c80;">This is a sample sub header for the email:</h2> <p>And here you will find a bunch of random words that mean nothing but at least you can put whatever you want here. Also Peter is a bitch.</p>'
  };
  sgMail
    .send(usermsg)
    .then(() => {
      res.json({ message: 'Message received.' });
      const adminmsg = {
        to: 'zechnwhite@gmail.com',
        from: req.body.email,
        subject: 'someone contacted you',
        text: req.body.message,
        html: `<h4 style="color: #5e9ca0;">Someone using the email ${req.body.email} messaged you and wrote:</h4><p>${req.body.message}</p>`
        // html: '<h1 style="color: #5e9ca0;">You can edit <span style="color: #2b2301;">this demo</span> text!</h1> <h2 style="color: #2e6c80;">This is a sample sub header for the email:</h2> <p>And here you will find a bunch of random words that mean nothing but at least you can put whatever you want here. Also Peter is a bitch.</p>'
      };
      sgMail.send(adminmsg);
    })
    .catch(error => {
      res.json({
        message:
          'There was an error sending your email. Zach needs to rewire this so it actually works.'
      });
    })
}
