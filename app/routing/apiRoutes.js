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
        //brackets added to end of key for some reason, investigate later...
        var answers = req.body['scores[]'],
            firstName = req.body.firstName,
            lastName = req.body.lastName,
            picUrl = req.body.picUrl

        console.log(answers)
        findFriend(res, answers, req.body)
    })
}

function findFriend (res, answers, person){
    console.log('Finding friends...')
    var match,
        matchDiff = 100

    friends.forEach(function(friend){
            var currentDiff = 0
        //cycle through each score
        friend["scores[]"].forEach(function(score, ind){

            var diff = Math.abs(Number(score) - Number(answers[ind]))
            currentDiff += diff 
        })

        if(currentDiff < matchDiff){
            matchDiff = currentDiff
            match = friend
        }
    })

    friends.push(person)
    res.send(match)
}

module.exports = apiRoutes

