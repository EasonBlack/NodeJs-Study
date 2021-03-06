var log4js = require('log4js');

log4js.configure({
  appenders: {
    console: { type: 'console' },
    //file: { type: 'file', filename: './log/log4jsconnect.log' },
    dateFile: {
      type: 'dateFile',
      filename: './log/date.log',
      pattern: 'yyyy-MM-dd-hh-mm'
    },
  },
  categories: {
    default: { appenders: ['console'], level: 'debug' },
    log4jslog: { appenders: ['dateFile'], level: 'info' }
  }
});


var logger = log4js.getLogger('log4jslog');

setInterval(()=>{
  logger.info("Some debug messages")
  logger.error('This is an error')
}, 3000)


