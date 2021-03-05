////////////////////////////////////////////////////////////////////////////////////
// mysql문을 사용하기 위한 모듈을 저장. //
var express = require('express');
var router = express.Router();
var path = require('path');

////////////////////////////////////////////////////////////////////////////////////
// 홈페이지에서 /schedule_list_move 요청이 오면, 이 함수를 실행시켜라. 
router.post('/', (req, res) => {
      res.sendFile(path.join(__dirname, '../public/html/schedule_list.html'));

});


module.exports = router;
