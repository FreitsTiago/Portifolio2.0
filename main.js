require('dotenv/config')
const express = require('express');
const app = express();
const http = require('http').Server(app);
const fs = require('fs');
const nodemailer = require("nodemailer");

//Server Http
const dir = __dirname + '/public'

app.use(express.json());
app.use(express.urlencoded());

app.post('/send_email', (req, res) => {
    if(req.body.name != null && req.body.email != null && req.body.msg != null){
        send_email(req.body.name,req.body.email,req.body.msg);
        res.send({status: 'email sent'});
    }else{
        res.send({status: 'error', error: 'missing information'});
    };
});

app.use('/', function (req, res) {
    if (req.url == '/') {
        var content = fs.readFileSync(dir + '/index.html');
        res.end(content);
    } else {
        try {
            try {
                var content = fs.readFileSync(dir + req.url + '.html');
                res.end(content);
            } catch {
                var content = fs.readFileSync(dir + req.url);
                res.end(content);
            };
        } catch {
            var content = fs.readFileSync(dir + '/404.html');
            res.status(404);
            res.end(content);
        };
    };

});

//Server Email

const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.PASS_USER,
    },
});

async function send_email(name,email,msg){
    const mailSent = await transporter.sendMail({
        text: 'Nome: ' + name + '\nEmail: ' + email + '\nMensagem: ' + msg,
        subject: 'Novo contato vindo do Portfolio',
        from: `Portifolio <${process.env.EMAIL_USER}>`,
        to: process.env.EMAIL_TO,
    });
};


http.listen(process.env.PORT || 1515, function () {
    console.log("Server is online in: " + (process.env.PORT || 1515));
});