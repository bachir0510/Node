const http = require('http');
const server = http.createServer((req,res) => {
  res.end('hello\n')
})
server.listen(4000, ()=> {
  console.log('server is runnig')
})