var nodemailer = require('nodemailer');

var smtpTransport = nodemailer.createTransport("SMTP",{
    host: "smtp.qq.com", // 主机
    secureConnection: true, // 使用 SSL
    port: 465, // SMTP 端口
    auth: {
        user: "435024167@qq.com", // 账号
        pass: "" // 密码
    }
});

var mailOptions = {
    from: 'eason <435024167@qq.com>',
    to: 'eason820720@163.com',
    subject: 'hello',
    html: '<b>hello world!</b>'
}

smtpTransport.sendMail(mailOptions, function(error, info){
    if(error){
        return console.log(error);
    }
    console.log('Message sent: ' + info.message);
    smtpTransport.close();
});