var express = require('express'),
    path = require('path'),
    bodyParser = require('body-parser'),
    htmlRoutes = require('./app/routing/htmlRoutes'),
    apiRoutes = require('./app/routing/apiRoutes')

var app = express(),
    PORT = process.env.PORT || 8080

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.use(express.static(path.join(__dirname, '/app/public')))

apiRoutes(app)
htmlRoutes(app)


app.listen(PORT, function(){
    console.log(`Now listening on PORT ${PORT}`)
})

