const mqtt = require('mqtt');
const require_aedes = require('aedes');
const aedes = require_aedes();
const option = {
  host: '127.0.0.1',
  port: 8883,
  protocal: 'mqtts',
  username: "Jangenkim",
  password: "123123" 
};

// Try Connection! //
const device = mqtt.connect(option);

// Maybe Connect? //
device.on('connect', connection_function => {
  // Connection Complete!
  console.log('connection!');
  
  // Try Publish!
  device.publish('device_Data', 'd_Data', pub => {
    console.log("Publish Topic: device_Data, " + "Publish Data: d_Data");
  });
  
  // Subscribe!
  device.subscribe('client_Data', sub => {
    console.log("Subscribe Topic: cleint_Data");
  })

  // Get Subscribe Data!
  device.on('message', (topic, message) => {
    console.log("Topic: " + topic + ", Data: " + message.toString());
  });

});









// Compelte Published Data!
//device.on('publish', async (packet, device) => { 
//  console.log("Device Id: " + device.id + ", Published Data: " + packet.payload.toString() + ", Published Topic: " + packet.topic);
//});


//aedes.on('subscribe', (subscriptions, device) => {
   // console.log("Device Id: " + device.id);
   // console.log("subscriptions: " + subscriptions);
    //console.log("Device Data: " + subscriptions.map(data => data.topic));
  //});