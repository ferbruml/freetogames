const mailer = require("nodemailer");

/*
  TODO: this should receive an array of games
  and send them as html by email
*/
module.exports = (email) => {
  const smtpTransport = mailer.createTransport({
    service: "gmail",
    auth: {
      user: "februml@gmail.com",
      pass: "gtkeqepmgxtobvrr",
    },
  })

  const mail = {
    from: "Ferrnanda <februml@gmail.com.br>",
    to: `${email}`,
    subject: 'Free games to play',
    //text: mensagem,
    html: '<p>You received free games to play!</p>',
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