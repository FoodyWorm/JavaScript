var express = require('express');
//var path = require('path');
var router = express.Router();

/* Post signUp listing. */
router.get('/', function(req, res, next) {
  //console.log(req.params);
  //console.log(req.params());
  //console.log(req.params(0,0,()=>{}));
  console.log("test");
  res.send("test");
  //res.sendFile(path.join(__dirname, '../public/index.html'));
});

module.exports = router;
