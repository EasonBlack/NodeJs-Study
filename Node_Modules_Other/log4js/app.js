var log4js = require('log4js');

log4js.configure({
  appenders: {
    console: { type: 'console' },
    file: { type: 'file', filename: './log/log4jsconnect.log' },
    dateFile: {
      type: 'dateFile',
      filename: './log/more.log',
      pattern: 'yyyy-MM-dd'
    },
  },
  categories: {
    default: { appenders: ['console'], level: 'debug' },
    log4jslog: { appenders: ['file', 'console'], level: 'debug' }
  }
});


var logger = log4js.getLogger('log4jslog');
logger.level = 'debug';
logger.debug("Some debug messages")