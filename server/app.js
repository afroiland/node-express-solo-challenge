var express = require( 'express' );
var app = express();
var bodyParser = require( 'body-parser' );
var urlEncodedParser = bodyParser.urlencoded( { extended: false } );
var path = require( 'path' );

var port = process.env.PORT || 3000;

app.listen( port, function(){
  console.log( 'server up on:', port );
});

app.get( '/', function( req, res ){
  res.sendFile( path.resolve( 'views/index.html' ) );
});

app.get( '/jokes', function (req, res){
  res.send(jokes);
});

app.post( '/jokes', function (req res){
  newJoke(req.body);
  res.send(jokes);
});

app.use( express.static( 'public' ) );




function newJoke (data){
  jokes.push(data);
}


// initial jokes provided by the client
var jokes = [
  {
    whoseJoke: "Huck",
    jokeQuestion: "What's the difference between roast beef and pea soup?",
    punchLine: "Anyone can roast beef."
  },
  {
    whoseJoke: "Kris",
    jokeQuestion: "How many software engineers does it take to change a lightbulb?",
    punchLine: "None! That's a hardware problem!"
  },
  {
    whoseJoke: "Luke",
    jokeQuestion: "Friends are like snow flakes...",
    punchLine: "If you pee on them they disappear."
  }
];
