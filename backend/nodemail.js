const mailer = require("nodemailer");

module.exports = (image, description) => {
  const smtpTransport = mailer.createTransport({
    service: "gmail",
    auth: {
      user: "februml@gmail.com",
      pass: "gtkeqepmgxtobvrr",
    },
  })

  const mail = {
    from: "Ferrnanda <februml@gmail.com.br>",
    to: 'fernanda.brumlousada@gmail.com',
    subject: `Fernanda te mandou a merda`,
    //text: mensagem,
    html: image,
  }

  return new Promise((resolve, reject) => {
    smtpTransport
      .sendMail(mail)
      .then((response) => {
        smtpTransport.close()
        return resolve(response)
      })
      .catch((error) => {
        smtpTransport.close()
        return reject(error)
      })
  })
}