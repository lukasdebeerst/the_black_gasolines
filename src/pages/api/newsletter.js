require('dotenv').config()

export default function (req, res) {


  const PASSWORD = process.env.password
  let nodemailer = require('nodemailer');
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'contact.theblackgasolines@gmail.com',
      pass: PASSWORD,
    },
  });

  const mailData = {
    from: 'contact.theblackgasolines@gmail.com',
    to: 'contact.theblackgasolines@gmail.com',
    subject: `New Subscriber`,
    text: req.body,
  }

  console.log(req.body, typeof req.body);


  transporter.sendMail(mailData, function (err, info) {
    if(err)
      console.log(err)
    else
      console.log(info)
  })

  res.status(200)

}