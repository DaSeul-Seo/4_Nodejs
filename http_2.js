//http 모듈 불러오기
const http = require('http');
const { Socket } = require('dgram');
// server 모듈 불러오기
const server = http.createServer();

let port = 3000;
server.listen(port, ()=>{
    console.log('http://localhost:%d', port);
});
server.on('connection', (Socket)=>{
    console.log("connection");
});
server.on('request', (request, response)=>{
    console.log("request");
    response.writeHead(200, {"Content-Type":"text/html; charset=utf8"});
    response.write("<h1>홈페이지</h1>");
    response.write("<a href = 'http://naver.com'>네이버</a>");
    server.close();
    response.end();
});
server.on('close', ()=>{
    console.log("close");
});