var schedule = require('node-schedule');


function schedule1(){
  schedule.scheduleJob('*/5 * * * * *', function(){
        console.log('schedule1 1 1:' + new Date());
  }); 
}

function schedule2(){
  schedule.scheduleJob('*/1 * * * *', function(){
      console.log('schedule2 2 2:' + new Date());
  }); 
}

schedule1();
schedule2();