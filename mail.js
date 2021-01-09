const nodemailer = require("nodemailer");

const SMTP_CONFIG = require('./smtp');

const transporter = nodemailer.createTransport({
    host: SMTP_CONFIG.host,
    port: SMTP_CONFIG.port,
    secure: false,
    auth: {
        user: SMTP_CONFIG.user,
        pass: SMTP_CONFIG.pass,
    },
    tls: {
        rejectUnauthorized: false,
    },
});

async function send(name,email,msg, to){
    const mailSent = await transporter.sendMail({
        text: 'Nome: ' + name + '\nEmail: ' + email + '\nMensagem: ' + msg,
        subject: 'Novo contato vindo do Protifolio',
        from: 'Portifolio <tiago.m.freitas205@gmail.com>',
        to: to,
    });

    console.log(mailSent)
}

module.exports = send