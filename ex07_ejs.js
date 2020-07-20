const http = require('http');
// express 모듈 설치 > npm i -S express.
const express = require('express');
//라우터 미들웨어 사용.
const router = express.Router();
// cors 미들웨어 설정
// npm i cors -S => 크로스 도메인 문제해결
const cors = require('cors');
// npm i -S serve-static
const static = require('serve-static');
// app 객체 생성 및 속성 정의(내부적으로 app객체가 존재) 
const app = express();
app.set('port', 3000);
// npm i ejs -S
app.set('views', __dirname + '/views'); // 경로
app.set('view engine', 'ejs'); // 확장자

// cross domain 문제를 cors 미들웨어로 해결
app.use(cors());
// public 디렉토리를 외부 접속 가능하게 오픈한다.
app.use('/', static(__dirname + '/public'));

router.route('/').get((req, res)=>{
    let host_name = '홍길동';
    if(req.query.host !=null){
        host_name = req.query.host;
    }
    req.app.render('home', {host:host_name}, (err, html)=>{
        if(err){
            res.end("<h1>EJS ERROR!</h1>");
            return;
        }
        res.end(html);
    });
});

// 라우터 미들웨어는 서버 실행 전에 설정.
app.use('/', router);
const server = http.createServer(app);
server.listen(app.get('port'), ()=>{
    console.log('http://localhost:%d', app.get('port'));
});
