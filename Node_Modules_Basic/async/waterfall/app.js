const async = require('async');

let tast1 = (cb) => {
  setTimeout(()=>{
    let result = "aaa"
    cb(null, result)
  })
}

let tast2 = (req, cb) => {
  setTimeout(()=>{
    cb(null, {
      first : req,
      secound: "bbbb"
    })
  })
}

let tast3 = (req, cb) => {
  setTimeout(()=>{
    cb(null, Object.assign({},req, {third: 'ddd'}))
  });
}

async.waterfall([
  tast1,
  tast2,
  tast3,
], (err, result) => {
  console.log('xxxxxxxx');
  console.log(result)
})

async.waterfall([
 cb=>setTimeout(()=>cb(null, {a: 1})),
 (req, cb) => setTimeout(()=>cb(null, Object.assign({},req, {b: 2}))),
 (req, cb) => setTimeout(()=>cb(null, Object.assign({},req, {c: 3})))
], (err, result) => {
  console.log('yyyyyyyy');
  console.log(result)
})

