
require("dotenv").config();

var keys = require("./keys.js");

var Spotify = require("node-spotify-api");

var spotify = new Spotify({
  id: keys.spotify.id,
  secret: keys.spotify.secret
});

console.log(keys);

var fs = require("fs");

var axios = require("axios");

var moment = require("moment");
// pseudocode-
//1 Bands in town
var showConcertInfo = function(artist){
    
    axios.get("https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp").then(function(response){
        var jsonData = response.data;

        if(!jsonData.length){
            console.log("Nothing found for "+ artist);
            return;
        }

        console.log("Upcoming shows for " + artist + ":");

        for (var i = 0; i < jsonData.length; i++) {
            var dat = jsonData[i];
            console.log(
                dat.venue.name +
                " " + "in " + " " +
                dat.venue.city +
                "," +
                (dat.venue.region || dat.venue.country) +
                " " +
                moment(dat.datetime).format("MM/DD/YYYY")
            );
          }    
    });

};

// //output for LIRI-SPOTIFY
var getArtist = function(artist){
    return artist.name;
}

var showSongInfo = function(songName){
    if (songName===undefined){
        songName = "All the Small Things";
    }

    spotify.search(
        {
            type: "track",
            query: songName
        },
       function(err, data){
           if (err){
               console.log("Error occurred: "+ err);
               return;
           }

           var songs = data.tracks.items;

          //  for (var i=0; i<songs.length; i++){
              //  console.log(i);
               console.log("artist: "+ songs[0].artist);
               console.log("song name: " + songs[0].name);
            console.log("preview song: " + songs[0].preview_url);
             console.log("album: " + songs[0].album.name);
            console.log("---------------------------------");
          //  }
       } 
    );
};
//output for LIRI-MOVIES
var showMovieInfo = function(movieName){ if (movieName === undefined) {
    movieName = "Mr Nobody";
  }
axios.get("http://www.omdbapi.com/?t=" + movieName + "&y=&plot=full&tomatoes=true&apikey=trilogy").then(function(respsone){
    var jsonData = respsone.data;

// * Title of the movie.
console.log("Title: " + jsonData.Title);
// * Year the movie came out.
console.log("Year: " + jsonData.Year);
// * IMDB Rating of the movie.
console.log("Rated: " + jsonData.Rated);
// * Rotten Tomatoes Rating of the movie.
console.log("Rotten Tomatoes Rating: " + jsonData.Ratings[1].Value);
// * Country where the movie was produced.
console.log("Country: " + jsonData.Country);
// * Language of the movie.
console.log("Language: " + jsonData.Language);
// * Plot of the movie.
console.log("Plot: " + jsonData.Plot);
// * Actors in the movie.
console.log("Actors: " + jsonData.Actors);
}
);
}

var showSomeInfo = function() {
    fs.readFile("random.txt", "utf8", function(error, data) {
      console.log(data);
  
      var dataArr = data.split(",");
  
      if (dataArr.length === 2) {
        input(dataArr[0], dataArr[1]);
      } else if (dataArr.length === 1) {
        input(dataArr[0]);
      }
    });
  };

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
//needs to take the users inputs from terminal
var runThis = function(argOne, argTwo) {
    input(argOne, argTwo);
  };

  runThis(process.argv[2], process.argv.slice(3).join(" "));
