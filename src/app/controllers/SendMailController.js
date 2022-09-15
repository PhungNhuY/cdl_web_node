const nodemailer = require('nodemailer');

class SendMailController {
    send(req, res, next){
        var transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
              user: 'cdl.webcontact78@gmail.com',
              pass: 'zrkkhgvhtvgslnex'
            }
          });
          
          var mailOptions = {
            from: 'cdl.webcontact78@gmail.com',
            to: '3f.donv@gmail.com',
            subject: 'An email from cdl-practice.org',
            text: `from: ${req.body.email}\n
            name: ${req.body.name}\n
            subject: ${req.body.subject}\n
            message: ${req.body.message}`
          };
          
          transporter.sendMail(mailOptions, function(error, info){
            if (error) {
              console.log(error);
            } else {
              console.log('Email sent: ' + info.response);
            }
          });
        res.redirect('/contact');
    }
}
module.exports = new SendMailController;