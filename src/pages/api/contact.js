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

  console.log(req.body);

  const mailData = {
    from: 'contact.theblackgasolines@gmail.com',
    to: 'contact.theblackgasolines@gmail.com',
    subject: `New Contact Submit`,
    html: `<div>
      <p>Name: ${req.body.name}</p>
      <p>Mail: ${req.body.mail}</p>
      <p>Message: ${req.body.message}</p>
    </div>`,
  }

  transporter.sendMail(mailData, function (err, info) {
    if(err)
      console.log(err)
    else
      console.log(info)
  })

  res.status(200)

}