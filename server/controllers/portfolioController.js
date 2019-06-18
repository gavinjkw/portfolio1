var nodemailer = require('nodemailer');

module.exports = {
    submitForm: function (req, res) {
      
        console.log("Made it to the controller")
        console.log("here is req", req.body)
        let mailOpts, smtpTrans;
        smtpTrans = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 465,
            secure: true,
            auth: {
                user: 'gavinjkw@gmail.com',
                pass: 'ixnbeyhgqypwzgxj'
            }
        });
        mailOpts = {
            from: req.body.firstName + ' &lt;' + req.body.lastName + ' &lt;' +req.body.email + '&gt;',
            to: 'gavinjkw@gmail.com',
            subject: 'New message from contact form at gavinwilson.me',
            text: `${req.body.firstName} ${req.body.lastName} (${req.body.email}) says: ${req.body.message}`
        };
        console.log("mailOpts", mailOpts)
        smtpTrans.sendMail(mailOpts, function (error, res) { 
            if (error) {
                console.log(error)
            }
            else {
                res.json(error)
            }
        });
       res.json({success: "message sent"})
    }
}