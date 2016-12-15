var path = require('path');
var express = require('express');
var exphbs = require('express-handlebars');

var app = express();
var photoData = require('./photos-data');
var port = process.env.PORT || 3000;

// Use Handlebars as the view engine for the app.
app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars');

app.use(express.static(path.join(__dirname, 'public')));

// Listen on the specified port.
app.listen(port, function () {
  console.log("== Listening on port", port);
});

//Displays home page
app.get('/', function (req, res) {
  res.render('main-page', {
    pageTitle: 'Welcome!',
    photoData: photoData
  });
});

//Displays list of sticky notes for each person from drop-down menu
 app.get('/photos/:location', function (req, res, next) {

   var location = req.params.place;
   var place = photoData[location];

   if (place) {
     res.render('photos-page', {
       pageTitle: 'Location: ' + location,
       photoName: location.place,
       photos: location.photos
     });
   } else {
     // Goes to 404 function if the requested user does not exist
     next();
   }
 });

// Displays 404 error message
app.get('*', function(req, res) {
  res.status(404).render('error-page', {
    pageTitle: '404'
  });
});

