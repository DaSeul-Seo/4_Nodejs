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
// cross domain 문제를 cors 미들웨어로 해결
app.use(cors());
// public 디렉토리를 외부 접속 가능하게 오픈한다.
app.use('/', static(__dirname + '/public'));

router.route('/').get((req, res)=>{
    res.end('/ GET request...');
});

// 접속 카운터 기능
let cnt = 0;
router.route('/count').get((req, res)=>{
    // 접속하면 카운트 증가
    cnt++;
    let date = new Date();
    let response = {
        "dateStr":(date.getMonth()+1) + '-'+date.getDate() +
        "/"+ date.getHours() + ":" + date.getMinutes(),
        "count": cnt
    };
    res.end(JSON.stringify(response));
    // console.log('count => ', cnt);
});

// 카운트 증가 검사
router.route('/compare/:size').get((req,res)=>{
    let size = req.params.size;
    if(cnt>size){
        let date = new Date();
        let response = {
        "dateStr":(date.getMonth()+1) + '-'+date.getDate() +
        "/"+ date.getHours() + ":" + date.getMinutes(),
        "count": cnt
        };
        res.end(JSON.stringify(response));
    } else{
        res.end("");
    }
});

// 라우터 미들웨어는 서버 실행 전에 설정.
app.use('/', router);
const server = http.createServer(app);
server.listen(app.get('port'), ()=>{
    console.log('http://localhost:%d', app.get('port'));
});
