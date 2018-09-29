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

  //每3分钟
  // schedule.scheduleJob('*/3 * * * *', function(){  //如果 * */3 会有问题
  //   console.log('scheduleCronstyle:' + new Date());
  // }); 

   //每30分钟
  schedule.scheduleJob('*/30 * * * *', function(){   //它会在:00 和 :30触发
    console.log('scheduleCronstyle:' + new Date());
  }); 

  //18点和20点每5分钟
  // schedule.scheduleJob('*/5 18,20 * * *', function(){  //如果 * */3 会有问题
  //   console.log('scheduleCronstyle:' + new Date());
  // }); 

  //异常抛出
  // schedule.scheduleJob('*/5 * * * * *', function(){
  //   try{
  //     throw new Error('Catch me');
  //   }catch(e){
  //     console.log(e.message)
  //   }
  // });

  // 测试报错
  // schedule.scheduleJob('*/5 * * * * *', function(){
  //   try{
  //     setTimeout(()=>{
  //       try {
  //         throw new Error('Catch me')
  //       } catch(e) {
  //         console.log(e.message)
  //       }
        
  //     })
  //   }catch(e){
  //     logger.debug("Some debug messages")
  //     console.log(e.message)
  //   }
  // });
}

scheduleCronstyle();