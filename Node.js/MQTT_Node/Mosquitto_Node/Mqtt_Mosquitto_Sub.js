const mqtt = require('mqtt');
var client = mqtt.connect('mqtt://test.mosquitto.org');

client.on('connect', () => {
  console.log("Client Connection!");

  client.subscribe('device_Data', () => {
    console.log("Client Topic: " + "device_Data");
  });

  client.publish('client_Data', "c_Data", () => {
    console.log("Publish Topic: client_Data, " + "Publish Data: c_Data");
  });

});

client.on('message', (topic, data, packet) => {
  console.log("Topic: " + topic + ", Data: " + data + ", Packet: " + packet.payload);
});