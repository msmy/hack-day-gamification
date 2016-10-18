var express = require('express');
var app = express();
var path = require('path');

app.use(express.static('dashboard'));

// viewed at http://localhost:8080
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/dashboard/index.html'));
});

app.listen(8080);