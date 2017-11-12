var express = require('express');
var path = require('path');

var app = express();
app.use(express.static('static'));

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, 'src/index.html'))
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
    console.log("Server's up, yo")
});