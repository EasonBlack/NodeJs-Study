var casper = require('casper').create();

casper.start().thenOpen("https://accounts.google.com/ServiceLogin?hl=en&passive=true&continue=https://www.google.co.kr/%3Fgfe_rd%3Dcr%26ei%3DoobeVsOoHq3K8geX84-gDg%26gws_rd%3Dssl", function() {
    this.capture('first.png');
    this.evaluate(function(){
        document.getElementById("Email").value="your email";
        document.getElementById("next").click();
    });
    this.wait(3000);
});


casper.then(function(){
    this.capture('second.png');
    this.evaluate(function(){
        document.getElementById("Passwd").value="your password";
        document.getElementById("signIn").click();
    });
    this.wait(3000);
});


casper.then(function(){
    this.capture('third.png');
});

casper.run();