const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const app = express();


app.use(methodOverride('_method'));


const http = require('http').createServer(app);
http.listen(8086, function(){

    console.log('listen 8080');
});


app.use( '/', express.static(path.join(__dirname, 'public')));

app.use ( '/re', express.static( path.join(__dirname, 'react-project/build'))); // 리액트 전환


app.get('/', function(req,res){

res.sendFile( path.join(__dirname, 'public/index.html'));

})

app.get('/re', function(req,res){

res.sendFile( path.join(__dirname, 'react-project/build.index.html'));

})