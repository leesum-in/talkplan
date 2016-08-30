'use strict';

var express = require('express');
var app = express();

var server = app.listen(3000, function() {
    var host = server.address().address;
    var port = server.address().port;

    console.log('앱은 http://%s:%s 에서 작동 중입니다.', host, port);
});

app.get('/', function(req, res) {
    res.send('Hello world!');
});
