////////////////////////////////////////////////////////////////////////////////////
// mysql문을 사용하기 위한 모듈을 저장. //
var express = require('express');
var router = express.Router();
var path = require('path');


////////////////////////////////////////////////////////////////////////////////////
// 홈페이지에 signup 요청이 오면, 요청자의 정보를 JavaScript로 전송.
router.post('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/html/schedule_list_add.html'));
  
});

module.exports = router;
