const mqtt = require('mqtt');
var device = mqtt.connect('mqtt://test.mosquitto.org');

device.on('connect', () => { 
  console.log("Device Connection!");

  device.subscribe('client_Data', () => {
    console.log("Device Topic: " + "Client_Data");
  });

  device.publish('device_Data', "d_Data", () => {
    console.log("Publish Topic: device_Data, " + "Publish Data: d_Data");
  });

});

device.on('message', (topic, data, packet) => {
  console.log("Topic: " + topic + ", Data: " + data + ", Packet: " + packet.payload);
});