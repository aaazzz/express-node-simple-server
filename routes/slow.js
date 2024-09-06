var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  const random = Math.floor(Math.random() * 4);
  const times = [
    50000,
    100,
    100,
    100,
    100,
  ]
  const sleepTime = times[random];

  console.log('wait for', sleepTime, 'ms')
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(res.send(`waited for ${sleepTime}ms\n`))
    }, sleepTime);
  })
});

module.exports = router;
