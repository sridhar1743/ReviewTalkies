/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var express = require('express');
var path = require('path');
var app = express();
app.use('/public', express.static(path.join(__dirname, 'public')));
app.get('/home', function(req, res){
    res.sendFile(__dirname + '/app/views/home.html');
});
app.listen(3000);