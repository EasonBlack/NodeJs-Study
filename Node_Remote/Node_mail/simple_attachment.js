var nodemailer = require('nodemailer');
var webshot = require('webshot');
var fs = require('fs');

var smtpTransport = nodemailer.createTransport("SMTP", {
    host: "smtp.qq.com", // 主机
    secureConnection: true, // 使用 SSL
    port: 465, // SMTP 端口
    auth: {
        user: "435024167@qq.com", // 账号
        pass: "" // 需要smtp密码
    }
});


webshot('http://news.baidu.com/', 'test_image.png', function (err) {
    console.log(__dirname);
    var img=fs.readFileSync(__dirname+"/test_image.png"); //讀取文件(圖片)
    var attachment=[{
        'filename':'test_image.png', //文件名稱
        'contents':img   //加載文件 圖片
    }];

    var mailOptions = {
        from: 'eason <435024167@qq.com>',
        to: 'eason820720@163.com',
        subject: 'hello',
        html: '12345',
        attachments:attachment
    }

    smtpTransport.sendMail(mailOptions, function (error, info) {
        if (error) {
            return console.log(error);
        }
        console.log('Message sent: ' + info.message);
        smtpTransport.close();
    });
});


