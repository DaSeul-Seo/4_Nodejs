const http = require('http');
const express = require('express');

const router = express.Router();

const app = express();
app.set('port', 3000);

router.route('/').get((req, res)=>{
    res.end('/GET request...');
});
router.route('/home/').get((req, res)=>{
    res.end('/home/ GET request...');
});
router.route('/process/login').get((req, res)=>{
    let name = req.query.name;
    let password = req.query.password;
    res.writeHead(200, {"Content-Type":"text/html; charset=utf8"});
    res.write('name => ' + name);
    res.write('<br>password => ' + password);
    res.end('<br>/process/login GET request...');
});

app.use('/', router);
const server = http.createServer(app);
server.listen(app.get('port'), ()=>{
    console.log('http://localhost:%d', app.get('port'));
});