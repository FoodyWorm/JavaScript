var mqtt = require('mqtt');
var mosca = require('mosca');

 
//브로커 세팅
var settings = {
      port: 1883//,
      //persistence: mosca.persistence.Memory,
      //http: {port: 443, bundle: true, static: './'},
};
 
 //MOCCA 서버 실행
var server = new mosca.Server(settings, function() {
      console.log('Mosca server is up and running')
});
 
 
//클라이언트 연결 시
server.clientConnected = function(client) {
    console.log('client connected', client.id);
};
 
//클라이언트에서 퍼블리시 되었을 때
server.published = function(packet, client, cb) {
 
  if (packet.topic.indexOf('echo') === 0) {
    console.log('ON PUBLISHED', packet.payload.toString(), 'on topic', packet.topic);
    return cb();
  }
 
 
  var newPacket = {
    topic: 'echo/' + packet.topic,
    payload: packet.payload,
    retain: packet.retain,
    qos: packet.qos
  };
 
  var sz = new Date().toUTCString() + ' ';
  console.log(sz);

  console.log(' newPacket', newPacket);
 
  //다른곳에 전달
  server.publish(newPacket, cb);
 
};

//MQTT 클라이언트, connect주소를 mqtt://test.mosquitto.org 이쪽에 하면 연결테스트 가능
//var client  = mqtt.connect('mqtt://test.mosquitto.org');
var client  = mqtt.connect({
  host: '127.0.0.1',
  port : 1883,
  clientId : 'Master',
  username: 'Master',
  password: '1234'
});

//연결 시 users/test 경로 서브스크라이브
client.on('connect', function () {
  console.log("connected");
  client.subscribe('users/test');
});

//서브스크라이브 한 경로에서 메시지가 왔을 때
client.on('message', function (topic, message) {
  var date_temp = new Date();
  var sz = date_temp.toUTCString() + '.' + date_temp.getMilliseconds();
  console.log(topic.toString() + ': ' + sz + ' ' + message.toString());
});

//아래는 퍼블리시가 가능하게 함
//client.publish('users/test', JSON.stringify(param));