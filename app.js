const http = require('http');
// express 모듈 설치 > npm i -S express.
const express = require('express');

//라우터 미들웨어 사용.
const router = express.Router();

// app 객체 생성 및 속성 정의(내부적으로 app객체가 존재) 
const app = express();
app.set('port', 3000);

router.route('/').get((req, res)=>{
    res.end('/ GET request...');
});
router.route('/home/').get((req, res)=>{
    res.end('/home/ GET request...');
});

// 요청 파라미터 받기(우아한 URL)
router.route('/calc/plus/:a/:b').get((req, res)=>{
    let a = parseInt(req.params.a);
    let b = parseInt(req.params.b);
    // res.send({"result":a+b);
    res.end(String(a+b));
});
router.route('/calc/minus/:a/:b').get((req, res)=>{
    res.end(String(parseInt(req.params.a) - parseInt(req.params.b)));
});
router.route('/calc/multi/:a/:b').get((req, res)=>{
    res.end(String(parseInt(req.params.a) * parseInt(req.params.b)));
});
router.route('/calc/div/:a/:b').get((req, res)=>{
    res.end(String(parseFloat(req.params.a) / parseFloat(req.params.b)));
});

// 라우터 미들웨어는 서버 실행 전에 설정.
app.use('/', router);
const server = http.createServer(app);
server.listen(app.get('port'), ()=>{
    console.log('http://localhost:%d', app.get('port'));
});
