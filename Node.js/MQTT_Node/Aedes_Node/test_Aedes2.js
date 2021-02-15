// Json 패키지에 mqtt 프로토콜을 사용하기위해 requier하여 저장.
var mqtt = require('mqtt');


// Aedes 시작함수 작성
function startAedes () {

  // 포트는 비보안 형식 1883
  const port = 1883
  
  // Json 패키지에 aedes 브로커를 사용하기 위해 require하여 저장. 그런데, 이 aedes라는 객체에 id는 'BROKER_test' 라는 프로퍼티를 추가함.
  const aedes = require('aedes')({ id: 'BROKER_test' })
  
  // Server
  // aedes브로커를 사용하는 서버를 net(TCP/IP)형식으로 제작하여 server에 저장. (1)
  const server = require('net').createServer(aedes.handle)

  // Client 없이 독자적으로 테스트.
  // server는 1883 port로 시작함과 동시에 server 자체적으로 client없이 publish 합니다. (2)
  server.listen(port, function () {
    console.log('Aedes listening on port:', port)
    aedes.publish({ topic: 'aedes/hello', payload: "I'm broker " + aedes.id })
  })

  // Client를 mqtt프로토콜 방식으로 서버에 connect
  var client  = mqtt.connect(server);

  // aedes형식의 subscribe은 구독이 되면 클라이언트의 정보와 구독한 토픽(?)을 검색하고 aedes.id를 출력하라.
  aedes.on('subscribe', function (subscriptions, client) {
    console.log('MQTT client \x1b[32m' + (client ? client.id : client) +
            '\x1b[0m subscribed to topics: ' + subscriptions.map(s => s.topic).join('\n'), 'from broker', aedes.id)
  })

  // aedes형식의 subscribe은 구독이 해제가 되면 클라이언트의 정보와 구독 상태(?)를 검색하고 aedes.id를 출력하라.
  aedes.on('unsubscribe', function (subscriptions, client) {
    console.log('MQTT client \x1b[32m' + (client ? client.id : client) +
            '\x1b[0m unsubscribed to topics: ' + subscriptions.join('\n'), 'from broker', aedes.id)
  })

  // fired when a client connects // client가 aedes서버에 접속했을 떄, 클라이언트의 정보를 출력하고 aedes.id를 출력하라.
  aedes.on('client', function (client) {
    console.log('Client Connected: \x1b[33m' + (client ? client.id : client) + '\x1b[0m', 'to broker', aedes.id)
  })

  // fired when a client disconnects // client가 aedes서버와의 접속이 끊길 떄, 클라이언트의 정보를 출력하고 aedes.id를 출력하라.
  aedes.on('clientDisconnect', function (client) {
    console.log('Client Disconnected: \x1b[31m' + (client ? client.id : client) + '\x1b[0m', 'to broker', aedes.id)
  })

  // fired when a message is published //  서버에 Publish가 되면 단, 모두 준비가 된 경우에만 그 퍼블리시 내용을 가져옵니다. client, id, paylode, topic, id.
  aedes.on('publish', async function (packet, client) {
    console.log('Client \x1b[31m' + (client ? client.id : 'BROKER_' + aedes.id) + '\x1b[0m has published', packet.payload.toString(), 'on', packet.topic, 'to broker', aedes.id)
    //console.log(client.id) //
  })

  // client가 잘 접속되면 함수를 실행함과 동시에 구독과 발행.
  client.on('connect', function () {  
      console.log("connected");

      //Subscribe
      client.subscribe('users/test', function(){
        console.log("Subscribe Complete");
      });

      //Publish
      client.publish('users/test', "Test_Publish", function(){
        console.log("Publish Complete");
      });

  });
  
  //서브스크라이브 한 경로에서 메시지가 왔을 때 시간과 함꼐 출력.
  client.on('message', function (topic, message) {
    var date_temp = new Date();
    var sz = date_temp.toUTCString() + '.' + date_temp.getMilliseconds();
    console.log(topic.toString() + ': ' + sz + ' ' + message.toString());
  });

}//startAedes;

startAedes();