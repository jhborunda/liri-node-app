
require("dotenv").config();

var keys = require("./keys.js");

var spotify = new Spotify(keys.spotify);

var fs = require("fs");

var axios = require("axios");

var Spotify = require("node-spotify-api");

var moment = require("moment");

// LIRI neeeds to take the follwoing commannds
var input = function(userData,functionData){
    switch(userData){
   // * `concert-this`
        case "concert-this":
        showConcertInfo(functionData);
        break;
// * `spotify-this-song`
        case "spotify-this-song":
        showSongInfo(functionData);
        break;
// * `movie-this`
        case "movie-this":
        showMovieInfo (functionData);
        break;
// * `do-what-it-says`
        case "do-what-it-says":
        showSomeInfo(functionData) ;
        break;
        default:
            console.log("Not an option!")
}
};
// pseudocode-
//1 Bands in town
var getBands = function (artist){
    axios.get("https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp").then(function(response){
        var jsonData = response.data;
        if(!jsonData.length){
            console.log("No results found for "+ artist);return;
        }

        console.log
    })
    // * Name of the venue

    //  * Venue location

    //  * Date of the Event (use moment to format this as "MM/DD/YYYY")

};

//output for LIRI-SPOTIFY
// * Artist(s)

// * The song's name

// * A preview link of the song from Spotify

// * The album that the song is from

// * If no song is provided then your program will default to "The Sign" by Ace of Base.

//output for LIRI-MOVIES

// * Title of the movie.
// * Year the movie came out.
// * IMDB Rating of the movie.
// * Rotten Tomatoes Rating of the movie.
// * Country where the movie was produced.
// * Language of the movie.
// * Plot of the movie.
// * Actors in the movie.

