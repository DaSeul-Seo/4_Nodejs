const http = require('http');
// express 모듈 설치 > npm i -S express.
const express = require('express');

// app 객체 생성 및 속성 정의(내부적으로 app객체가 존재) 
const app = express();

app.set('port', 3000);

app.get('/', (req, res)=>{
    res.writeHead(200, {"Content-Type":"text/html; charset=utf8"});
    res.write("<h1>홈페이지</h1>");
    res.write("<a href='/home'>home</a>");
    res.end();
});
app.get('/home/', (req, res)=>{
    res.writeHead(200, {"Content-Type":"text/html; charset=utf8"});
    res.write("<h1>/home/ 요청하였음.</h1>");
    res.end();
});

const server = http.createServer(app);

server.listen(app.get('port'), ()=>{
    console.log('http://localhost:%d', app.get('port'));
});