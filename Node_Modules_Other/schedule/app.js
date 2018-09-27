var schedule = require('node-schedule');

function scheduleCronstyle(){
  //52,53,55分钟执行
  // var rule = new schedule.RecurrenceRule();
  // rule.minute = [52,53,55];
  // schedule.scheduleJob(rule, function(){
  //   console.log('scheduleCronstyle:' + new Date());
  // }); 

  //每5秒
  // schedule.scheduleJob('*/5 * * * * *', function(){
  //       console.log('scheduleCronstyle:' + new Date());
  // }); 

  //异常抛出
  // schedule.scheduleJob('*/5 * * * * *', function(){
  //   try{
  //     throw new Error('Catch me');
  //   }catch(e){
  //     console.log(e.message)
  //   }
  // });

  schedule.scheduleJob('*/5 * * * * *', function(){
    try{
      setTimeout(()=>{
        try {
          throw new Error('Catch me')
        } catch(e) {
          console.log(e.message)
        }
        
      })
    }catch(e){
      console.log(e.message)
    }
  });
}

scheduleCronstyle();