const http = require('http');

// http 모듈 불러오기
const server = http.createServer();

let port = 3000;
server.listen(port, ()=>{
    console.log('http://localhost:%d', port);
});
server.on('connection', (socket)=>{
    console.log("connection");
});
server.on('request', (request, response)=>{
    console.log("request");
    response.writeHead(200, {"Content-Type":"text/html; charset=utf=8"});
    response.write('<h1>Hello Nodejs World / 한글도 된다!(encodig 설정하면 된다)</h1>');
    response.write("<a href='http://naver.com'>네이버로 이동</a>");
});
server.on('close', ()=>{
    console.log("close");
});