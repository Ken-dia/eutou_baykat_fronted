const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(__dirname));

//app.use(express.static(__dirname + '/dist/eutou-baykat-frontend'));
app.get('/', function(req,res) {
  res.sendFile(path.join(__dirname, './public', 'eutou-baykat-frontend.html'));
//res.sendFile(path.join(__dirname + '/dist/eutou-baykat-frontend/index.html') );
});
app.listen(process.env.PORT || 8080);
