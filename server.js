// Install express server
const express = require('express');
const path = require('path');
const app = express();
/* app.use(express.static(__dirname + "/public"));

app.get("/", (req, res, next) => {
    res.sendFile( path.resolve( __dirname, 'public/index.html' ) );
}); */
// Serve only the static files form the dist directory
 app.use(express.static(__dirname + '/dist/eutou-baykat-fronted'));
app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname + '/dist/eutou-baykat-fronted/index.html'));
});
// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);
