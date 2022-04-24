const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const app = express();


app.use(methodOverride('_method'));


const http = require('http').createServer(app);
http.listen(8086, function(){

    console.log('listen 8086');
});


app.set('view engine', 'ejs'); // view 엔진 선언 (기본 디렉터리 views)
app.set('views', 'public/views'); // view 엔진의 기본 템플릿을 public/views으로 정의.


app.use( '/', express.static(path.join(__dirname, 'public')));
//app.use( '/', express.static('public'));

app.use ( '/re', express.static( path.join(__dirname, 'react-project/build'))); // 리액트 전환


app.get('/', function(req,res){

//res.sendFile( path.join(__dirname, 'public/index.html'));
res.render('index.ejs');
//res.sendFile(__dirname+'/index.ejs');

})

app.get('/re', function(req,res){

res.sendFile( path.join(__dirname, 'react-project/build.index.html'));

})