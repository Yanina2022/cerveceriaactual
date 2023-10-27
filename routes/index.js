var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/', async (req, res, next) => {
  console.log(req.body)

  var nombre = req.body.nombre;
  var apellido = req.body.apellido;
  var email = req.body.email;
  var telefono = req.body.tel;
  var mensaje = req.body.mensaje;

  var obj = {
    to: 'yana_mta_2010@hotmail.com',
    subject: 'contacto desde la web',
    html: nombre + "se contacto atraves de la web y quiere mas informacion a este correo :" + email + ". <br> ademas,hizo este comentario :" + mensaje + ". <br> su tel es : " + tel
  }
  var transport = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS
    }
  });
  var info = await transport.sendMail(obj);
  res.render('contacto', {
    message: 'mensaje enviado correctamente'
  });
});

module.exports = router;
