import nodemailer from "nodemailer"
import {get} from '../config'
var email = get('staging').Email;

export const sentEmail = (from,to,subject,text) => {
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
        user: email.user,
        pass: email.password
        }
    });
    var mailOptions = {
        from:from,
        to:to,
        subject:subject,
        text:text
    };
    transporter.sendMail(mailOptions, function(error, info){
        if (error) {
            // console.log(error);
            return false
        } else {
            // console.log('Email sent: ' + info.response);
            return true
        }
    });
     
}
