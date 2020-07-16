const http = require('http');
// express 모듈 설치 > npm i -S express
const express = require('express');

// app 객체 생성 및 속성 정의
// 네부적으로  app 객체가 있음
const app = express(); 

//set()으로 속성 추가 / get()으로 속성 값 가져오기
// 3000이라는 속성을 port에 넣어 주었다.
app.set('port', 3000);

// Client 요청에 대한 설정
app.get('/', (req, res)=>{
    res.writeHead(200,{'Content-Type':'text/html; charset=utf8'});
    res.write("<h1>DSS 홈페이지</h1>");
    res.write("<a href='/home'>HOME</a>");
    res.end(); // end()가 빠지면 브라우저에서 무한루프
});
app.get('/home/', (req, res)=>{
    res.writeHead(200,{'Content-Type':'text/html; charset=utf8'});
    res.write("<h3>/home/으로 요청하였습니다.</h3>");
    res.end(); // end()가 빠지면 브라우저에서 무한루프
});

// server는 모든 설정이 끝나고 실행한다.
// server 생성
const server = http.createServer(app);

// 웹서버 실행 > node app.js
// listen = 실행
// Server 실행 => Browser 접속
server.listen(app.get('port'), ()=>{
    console.log('http://localhost:%d', app.get('port'));
});

// taskkill
// netstat -ano | findstr 3000
// taskkill /PID 번호 /F (띄어쓰기 주의)
