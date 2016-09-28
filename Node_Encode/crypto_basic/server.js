const crypto = require('crypto');
const secret = '123456';
const cipher = crypto.createCipher('aes192', secret);

var encrypted = cipher.update('对对对的sdb', 'utf8', 'hex');
encrypted += cipher.final('hex');
console.log(encrypted);


const decipher = crypto.createDecipher('aes192', secret);
var decrypted = decipher.update(encrypted, 'hex', 'utf8');
decrypted += decipher.final('utf8');
console.log(decrypted);
