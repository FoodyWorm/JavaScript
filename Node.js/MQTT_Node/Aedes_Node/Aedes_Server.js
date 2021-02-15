const require_aedes = require('aedes');
const aedes = require_aedes();
const server = require('net').createServer(aedes.handle);


server.on('connection', (client) => {
  console.log("Client Adress: " + client.address().address);
  console.log("Client: " + client);
  //client.pipe("Response 200");
});

server.on('error', (err) => {
  console.log("Error 발생 => " + err);
});

server.on('close', close_server => {
  console.log("서버가 종료되었습니다.");
})

// 서버를 8883 포트로 실행.
server.listen(8883, () => {
  console.log("Server Running...");
});

// Compelte Published Data!
server.on('publish', async (packet, client) => { 
  console.log("Client Id: " + client.id + ", Published Data: " + packet.payload.toString() + ", Published Topic: " + packet.topic);
});

    // Get Subscribe Data!
    server.on('subscribe', (subscriptions, device) => {
      console.log("Device Id: " + device.id);
      console.log("subscriptions: " + subscriptions);
      console.log("Device Data: " + subscriptions.map(data => data.topic));
    });

    server.on('message', (topic, message) => {
      console.log("Topic: " + topic + ", Data: " + message.toString());
    })