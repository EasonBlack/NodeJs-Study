var log4js = require('log4js');

log4js.configure({
  appenders: {
    dateFile: {
      type: 'dateFile',
      filename: './log/date.log',
      pattern: 'yyyy-MM-dd-hh-mm'
    },
  },
  categories: {
    default: { appenders: ['dateFile'], level: 'debug' },
  }
});


var logger = log4js.getLogger('check');

setInterval(()=>{
  logger.info("Some debug messages")
  logger.error('This is an error')
}, 3000)


