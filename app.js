var express = require("express");
var ejs = require('ejs');
var routers = require('./routers/mainRouter');

var app = express();

app.set('view engine', 'ejs');
app.engine('html', ejs.renderFile);

// routers
routers.router(app);
// app.get('/', function(req, res){
//     res.render('index.html');
// });

// app.get('/about', function(req, res){
//     res.render('about.html');
// });

// server
var server = app.listen(5566, function(){
    console.log("Server is running on http://localhost:5566");
});