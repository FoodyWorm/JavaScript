// ready, listen_timout, kill_timeout 설정파일 - 서버를 교체할 때, 서버가 일시적으로 종료되지 않도록, 클라이언트의 요청을 원활하게 수행하도록.
module.exports = {
  apps: [{
    name: 'app',
    scripts: './Async_Server.js',
    instances: 0,
    exec_mode: 'cluster',
    wait_ready: true,
    listen_timeout:50000,
    kill_timeout: 50000
  }]
}