// 완성된 임시 서버
const express = require('express');
const app = express();
const port = 3030;

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.listen(port, function() { 
  process.send("ready");
  console.log('application is listening on port: ' + port);
});

// "pm2 start app.js" 로 데몬화(daemonize)하고 모니터링이 가능. ( 기본 모드인 Fork) //
// pm2를 사용하는 이유는 단일 코어에서 분할 코어로 사용하기 위해.
// 이 메인 서버에서도 분할하여 사용하고 싶다면, 이를 위해서는 클러스터 모듈이 필요.

// "pm2 scale 'pm2_list_filename' 'option(ex:+3)' 으로 코어를 분할하거나 줄일 수 있다.

// "pm2 reload 'index(ex:id, name, all') 명령어를 사용하면, 실행 중인 프로세스를 재시작 가능"

// "pm2 list" 로, 재시작이 잘 되었는지 확인이 가능.

// 메인 서버를 상시로 On을 해두고 싶다면, 클러스터 모듈이 필요한 듯. pm2로 시작할 때만 켜지지, 이벤트가 끝나면 꺼짐.

// 클러스트 모듈이 필요한 것이 아니라, 서버가 아직 준비가 안됬는데, 불러와서 status가 offline으로 보였던 것...!

// 로그 확인은 "pm2 monit" or "pm2 logs"
