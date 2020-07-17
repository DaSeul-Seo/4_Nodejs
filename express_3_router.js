const http = require('http');
// express 모듈 설치 > npm i -S express.
const express = require('express');

//라우터 미들웨어 사용.
const router = express.Router();

// app 객체 생성 및 속성 정의(내부적으로 app객체가 존재) 
const app = express();
app.set('port', 3000);

router.route('/').get((req, res)=>{
    res.end('/ get request...');
});
router.route('/home/').get((req, res)=>{
    res.end('/home/ get request...');
});

// 라우터 미들웨어는 서버 실행 전에 설정.
app.use('/', router);

const server = http.createServer(app);
server.listen(app.get('port'), ()=>{
    console.log('http://localhost:%d', app.get('port'));
});
