// 기본 클러스터 설정파일

module.exports = {
  apps: [{
    name: 'app',
    script: './Async_Server.js',
    instances: 0,
    exec_mode: 'cluster'
  }]
}