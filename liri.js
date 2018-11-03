require("dotenv").config();

//add require of the needed node packages

var request = require('request');
var moment = require('moment');
var Spotify = require('node-spotify-api');
var fs = require('fs');

// Add the code required to import the keys.js file and store it in a variable.

var keys = require('./keys');

// You should then be able to access your keys information like so
// var spotify = new Spotify(keys.spotify);

// Make it so liri.js can take in one of the following commands:
        
        /*process.argv  An array containing the command line arguments. 
        The first element will be 'node', the second element will be the name of the JavaScript file. 
        The next elements will be any additional command line arguments.*/

var command = process.argv[2];
var collectData = process.argv[3];

///reference activity 15 -
// create a switch-case statement (if-else would also work), the switch-case will direct which function gets run.

switch (command) {
    case "concert-this":
        concertThis(collectData);
        break;
    
    case "spotify-this-song":
        spotifyThis(collectData);
        break;
    
    case "movie-this":
        movieThis(collectData);
        break;

    case "do-what-it-says":
        doThis(collectData);
        break;
}

//create functions to match above switch/case

// concert-this, similar to activity 17 - request
/*Request is designed to be the simplest way possible to make http calls. It supports HTTPS and follows redirects by default.*/

/*node liri.js concert-this <artist/band name here> This will search the Bands in Town Artist Events API ("https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp") for an artist and render the following information about each event to the terminal:
Name of the venue - Venue location - Date of the Event (use moment to format this as "MM/DD/YYYY")*/

//var request = require('request'); this variable has been moved to the top of the page 

function concertThis(artist){
    request("https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp", function (error, response, body) {
    var data = JSON.parse(body)
    for (var i = 0; i < data.length; i++){
        var date = data[i].datetime
        console.log("Venue: " + data[i].venue.name)
        console.log("Venue City: " + data[i].venue.city)
        console.log("Concert Date: " + moment(date).format("MM/DD/YYYY"));
        }
    })
}

// spotify-this-song

/*This will show the following information about the song in your terminal/bash window
Artist(s) - The song's name - A preview link of the song from Spotify - The album that the song is from
If no song is provided then your program will default to "The Sign" by Ace of Base.*/

//create the function, set default song

function spotifyThis(song){
    if (song === undefined){
        song = "The Sign"
    }

    //make the api call
    //hidden api key - reference node-spotify npm - again, the require variable is listed up top

    let config = {
        id:keys.spotify.id,
        secret: keys.spotify.secret
    }
    
    var spotifySong = new Spotify(config);

    spotifySong.search({
        type: 'track',
        query: song
    }, function (err, data){
        if (err){
            return console.log('Error occured: ' + err)
        }
        for (var i = 0; i < data.tracks.items[0].artists.length; i++){
            var artists = data.tracks.items[0].artists[i].name;
            console.log(artists);
        }
        var songlink = data.tracks.items[0].preview_url;
        console.log(songlink);
        var songalbum = data.tracks.items[0].album.name;
        console.log(songalbum);
    });
}

// movie-this, reference activity 17 for help

function movieThis (movieName){
    if (movieName === undefined){
        movieName = "Mr. Nobody"
    }

    var queryURL = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy";

    console.log(movieName)

    request(queryURL, function(error, reponse, body){

        if (!error && response.statusCode === 200) {

            console.log("Release Year: " + JSON.parse(body).Year);
            console.log("IMDB Rating: " +JSON.parse(body).imdbRating);
            console.log("Rotten Tomatoes Rating: " + JSON.parse(body).Ratings[1].Value);
            console.log("Country Where Produced: " + JSON.parse(body).Country);
            console.log("Language: " +JSON.parse(body).Language);
            console.log("Plot: " + JSON.parse(body).Plot)
            console.log("Actors: " + JSON.parse(body).Actors);
        }
    });
}

// do-what-it-says, reference activity 12 for help

function doThis(){
    fs.readFile("random.txt", "utf8", function(error, data) {

        if (error) {
          return console.log(error);
        }
      
        console.log(data);
      
        // make it more readable with split
        var dataArr = data.split(",");
      
        //e-display the content as an array for later use.
        console.log(dataArr);

        switchThis(dataArr[0],dataArr[1]);
      
      });
}


