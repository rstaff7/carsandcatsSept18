var express = require("express");
console.log("Let's find out what express is", express);
var app = express();
console.log("Let's find out what app is", app);

// this is the line that tells our server to use the "/static" folder for static content
app.use(express.static(__dirname + "/static"));
// This sets the location where express will look for the ejs views
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

// use app's get method and pass it the base route '/' and a callback
app.get('/', function(request, response) {
   console.log("The request object", request);
   console.log("The response object", response);
   response.send("<h1>Hello Express</h1>");
})

app.listen(8000, function() {
  console.log("listening on port 8000");
})
