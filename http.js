// var, let, const => 변수나 상수
// 바뀌지 않는 static => const

// http 모듈 불러오기
const http = require('http');

// server 생성
const server = http.createServer();

// 웹서버 실행 > node app.js
// listen = 실행
// Server 실행 => Browser 접속
let port = 3000;
server.listen(port, ()=>{
    console.log('http://localhost:%d', port);
});

// Client 연결 이벤트 처리
server.on('connection',(socket)=>{
    console.log('Client Connection');
});
server.on('request',(request, response)=>{
    // request = 파라미터(query 정보, path, port 정보 등)
    // response = server쪽에서 요청한 것을 응답
    console.log('Client Request');
    // end => ex) 무전시 오버
    // html의 header 느낌. 
    response.writeHead(200, {'Content-Type' : 'text/html; charset=utf8'});
    // write = body
    response.write('<h1>Hello Nodejs World / 한글도 된다!(encodig 설정하면 된다)</h1>');
    response.write("<a href='http://naver.com'>네이버로 이동</a>");
    // server 강제종료 대기....
    server.close();
    response.end(); // end에 무언가를 써주지 않음.

});
server.on('close',()=>{
    console.log('Client Server Connection End');
});
