var nodemailer = require('nodemailer'),
    _utils = require('./utils'),
    smtpConfig = require('./config/smtp.json'),
 
    // Declare nodemailer vars
    transporter,
    mailOptions,

    // Get email content from SMTP Config
    email = smtpConfig.emailcontent,

    // pass cached GUID 
    _cachedGUID = _utils.guid(),
    getVal = _utils.getVal(_cachedGUID),

    // Email contents
    _from =  email.from, // sender address
    _to = email.to, // list of receivers
    _subject = email.subject,
    _textmsg = email.text,
    _html = email.html;

    // create reusable transporter object using the default SMTP transport
    transporter = nodemailer.createTransport(smtpConfig.unsecure-ntlm);

    // setup e-mail data
    mailOptions = {
            from: _from.shift(), // sender address
            to: _to.shift(), // list of receivers
            subject: getVal(_subject.shift()), // Subject line
            text: getVal(_textmsg.shift()), // plaintext body
            html: getVal(_html.shift()) // html body
    };

    // send mail with defined transport object
    transporter.sendMail(mailOptions, function(error, info){
        if(error){
                return console.log(error);
        }
                console.log('Message sent: ' + info.response);
    });
