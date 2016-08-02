var express = require('express');
var path = require('path');
var app = express();
var stylus = require('stylus');
var nib = require('nib');
// view engine setup

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
//app.use(express.logger('dev'));
function compile(str, path) {
  return stylus(str)
    .set('filename', path)
    .use(nib())
}
app.use(stylus.middleware(
  { src: __dirname + '/public'
  , compile: compile
  }
));
app.use(express.static(__dirname + '/public'));


app.get('/', function (req, res) {
  res.render('index',
  { title : 'Home' }
  )
})

app.get('/sharesocialmedia', function(req, res) {

	//res.render('layout', { title: 'Test' });
	res.render('fb_share_button', { title: 'Share Button Example' });
	//res.render('tweet_share_button', { title: 'Test' });
	//res.send('share socail media!');
});

app.listen(8080, function() {
	console.log('Example app listening on port 8080!');
});
