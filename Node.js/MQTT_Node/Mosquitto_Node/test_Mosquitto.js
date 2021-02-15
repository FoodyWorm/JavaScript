// MQTT 서버를 제작하기 위해 준비 //
// mqtt에 mqtt객체를 요구.
var mqtt = require('mqtt');
// client에 <= mqtt프로토콜 형식으로 임시 서버(?) 브로커(?) 데이터베이스(?)에 접속.
 client = mqtt.connect('mqtt://test.mosquitto.org');

// 이 클라이언트가 접속을 시도할 경우 //

// 이 클라이언트가 connect할 경우 함수를 실행.
client.on('connect', function () {

//클라이언트는 presence토픽을 구독(subscribe)함.
      client.subscribe('presence', function(err) {

    //단, 에러가 나지 않았을 경우에 실행함.
    if(!err)
      // 클라이언트는 발행(publish)을 하되 presence로 토픽으로 지정하고 데이터는 'Hello mqtt"를 포함.
      client.publish('presence', 'Hello mqtt');
      
  });

});

// 클라이언트가 message를 보냈을 경우 함수를 실행.
client.on('message', function (topic, message) {
  //클라이언트가 보낸 토픽.
  console.log(topic);
  //클라이언트가 보낸 메세지.
  console.log(message.toString());
  //클라이언트의 접속을 종료함.
  client.end();
  
})