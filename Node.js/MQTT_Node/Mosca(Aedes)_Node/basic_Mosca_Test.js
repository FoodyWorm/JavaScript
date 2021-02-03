//import mosca from "mosca"
//import {bunyan} from "bunyan";
// buyan logger
//const log = bunyan.createLogger({ name: "mosca_node"});
//log.info("bunyan mqtt broker log");

// mosca를 사용하기위해 json 파일에 요구함.*
/*
var mosca = require('mosca')
 
var settings = {
      port: 1883,
      persistence: mosca.persistence.Memory
};
 
 
var server = new mosca.Server(settings, function() {
      console.log('Mosca server is up and running')
});
 
 
server.clientConnected = function(client) {
    console.log('client connected', client.id);
};
 
 
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
 
  console.log('newPacket', newPacket);
 
  server.publish(newPacket, cb);
 
};
*/

//////////////////////////////////////////
// mosca를 사용하기위해 json 파일에 요구함.
var mosca = require('mosca');

/*/ settings에 사용할 backend를 객체로 준비함.
const settings = {
  //using ascoltatore
  type: 'mongo',		
  url: 'mongodb://localhost:27017/mqtt',
  pubsubCollection: 'ascoltatori',
  mongo: {}
};*/
// 서버의 세팅 값을 준비함.
const settings = {
  port: 1883,
  backend: pubsubsettings,
  persistence: mosca.persistence.Memery
};

// 세팅값을 기준으로 모스카 서버 객체를 server에 저장.
const server = new mosca.Server(settings, function() {
  console.log('Mosca server is up and runninng');
});

// 퍼블리싱할 임시 데이터를 만듭니다.
var testMessage = {
  id: 'jangenkim',
  topic: '/hello/world',
  payload: 'abcde', // or a Buffer
  qos: 0, // 0, 1, or 2
  retain: false // or true
};

// 서버가 준비되면 문구를 출력하라.
server.on('ready', function(){
  console.log('Mosca Server is up and running');

});

// 브로커(server)에 message를 퍼블리싱합니다. 보내고 난 후, 'Complite Publish'을 출력합니다.
server.publish(testMessage, function(){
  console.log('Complite Publish');
});

// 브로커(server)에 /hello/world를 구독합니다. 구독하고 난 후, 'Complite Subscribe'을 출력합니다.
server.subscribe('/hello/world', function(){
  console.log('Complite Subscribe');
});

// 서버가 작동되고, 클라이언트가 접속했을 때, 이 함수를 실행한다.
server.on("clientConnected", function(client) {
  // 클라이언트가 접속했을 때, 클라이언트 정보를 알려줍니다.
  console.log('client connected', client.id);
});

// 서버가 작동되고, 퍼블리셔가 행동했을 때, 이 함수를 실행합니다.
server.on("published", function(packet, client, cb) {
  // 만약, 퍼블리셔가 보낸 패킷의 토픽 indexOf가 0일 때,
  if(packet.topic.indexOf('echo') === 0) {
    // On PUBLISHED (데이터) On topic (토픽)을 출력해라.
    console.log('ON PUBLISHED', packet.payload.toString(), 'on topic', packet.topic);
    
    // 들어온 cb값을 다시 return
    return cb(); 
  }
  // 아니면, 오류 출력
  else{
    console.log('NO DATA');
  }

  // 패킷정보들을 객체화.
  var newPacket = {
    topic: 'echo/' + packet.topic, // key(키)
    payload: packet.payload, // 실질적인 데이터
    retain: packet.retain, //  유지(?)
    qos: packet.qos // 보안단계 Qos 0~2단계
  };

});

// Mosca는 Aedes로 대체되었다. //










