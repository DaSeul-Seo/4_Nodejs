const http = require('http');
const express = require('express');

const router = express.Router();
const app = express();
app.set('port', 3000);

app.get('/', (req, res)=>{
    res.sendFile(__dirname + '/calculator.html');
});

router.route('/result/'). get((req, res)=>{
    let a = req.query.a;
    let oper = req.query.oper;
    let b = req.query.b;
    let result = eval(a+oper+b);
    // console.log(a);
    // console.log(b);
    // console.log(oper);

    res.writeHead(200, {"Content-Type":"text/html; charset=utf8"});
    res.write("result : " + a + oper + b + "=" + result);
    res.end();
});

app.use('/', router);
const server = http.createServer(app);
server.listen(app.get('port'), ()=>{
    console.log('http://localhost:%d', app.get('port'));
});