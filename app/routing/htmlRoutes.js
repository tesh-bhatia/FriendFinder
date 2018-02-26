var express = require('express'),
    path = require('path'),
    bodyParser = require('body-parser')

function htmlRoutes (app) {
    app.get('/survey', function(req, res){
        res.sendFile(path.join(__dirname, '../public/survey.html'))
    })
    
    app.get('/', function(req, res){
        res.sendFile(path.join(__dirname, '../public/home.html'))
    })
}

module.exports = htmlRoutes;
