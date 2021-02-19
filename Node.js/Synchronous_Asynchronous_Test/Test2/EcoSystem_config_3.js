module.exports = {
  options: [{
    name: "Test_Server",
    scripts: "./Async_Server.js",
    instances: 0,
    exec_mode: 'cluster',
    wait_ready: true,
    listen_timeout: 50000,
    

    
    


  }]
}