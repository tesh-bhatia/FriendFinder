var express = require('express'),
    path = require('path'),
    bodyParser = require('body-parser'),
    friends = require('../data/friends')

function apiRoutes (app) {
    
    app.get('/api/friends', function(req, res){
        res.end(JSON.stringify(friends, null, 2))
        console.log('Getting friends...')
    })

    app.post('/api/friends', function(req,res){
        console.log('Finding friends...')
    })
}

module.exports = apiRoutes