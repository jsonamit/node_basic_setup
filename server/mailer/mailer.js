const nodemailer = require('nodemailer');

nodemailer.createTestAccount((err, account) => {
  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secureConnection: 'false', // true for 465, false for other ports
    auth: {
      user: 'jsonamit@gmail.com', // generated ethereal user
      pass: 1212122, // generated ethereal password
    },
    tls: {
      ciphers: 'SSLv3',
      rejectUnauthorized: false,
    },
  });

  // setup email data with unicode symbols
  const mailOptions = {
    from: '"Amit Kumar 👻" <jsonamit@gmail.com>', // sender address
    to: 'jsonamit@gmail.com', // list of receivers
    subject: 'Nodejs Mailer testing', // Subject line
    text: 'Node mailer testing?', // plain text body
    html: `<h2>Nodejs mailer testing</h2><br />
                       Name:${req.body.name}<br />
                       Email:${req.body.email}
                     `, // html body
  };

  // send mail with defined transport object
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.log(error);
    }
    console.log('Message sent: %s', info.response);
    // Preview only available when sending through an Ethereal account
    // console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
  });
});
