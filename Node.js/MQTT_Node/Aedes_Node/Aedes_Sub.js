const mqtt = require('mqtt');
const require_aedes = require('aedes');
const aedes = require_aedes();
const options = {
  host: '127.0.0.1',
  port: 8883,
  protocal: 'mqtts',
  username: "Jangenkim",
  password: "123123" 
};

// Try Connection! //
const client = mqtt.connect(options);

// Maybe Connect? //
client.on('connect', connection_function => {
    // Connection Complete!
    console.log('connection!');
    
    // Subscribe!
    client.subscribe('device_Data', sub => {
      console.log("Subscribe Topic: device_Data");
    });

    // Get Subscribe Data!
    client.on('message', (topic, message) => {
      console.log("Subscribe Topic: " + topic + ", Subscribe Data: " + message.toString());
    });

    // Try Publish!
    client.publish('client_Data', 'c_Data', pub => {
      console.log("Publish Topic: client_Data, " + "Publish Data: c_Data");
    });


});












// Complte Published Data!
// client.on('publish', async (packet, client) => {
//  console.log("Client Id: " + client.id + ", Published Data: " + packet.payload.toString() + ", Published Topic: " + packet.topic);
//   });

// Get Subscribe Data!
    // client.on('subscribe', (subscriptions, device) => {
    //  console.log("Device Id: " + device.id);
    //  console.log("subscriptions: " + subscriptions);
    //  console.log("Device Data: " + subscriptions.map(data => data.topic));
    //});