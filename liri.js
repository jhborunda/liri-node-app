
require("dotenv").config();

var keys = require("./keys.js");

var spotify = new Spotify(keys.spotify);

// pseudocode-

// LIRI neeeds to take the follwoing commannds
// * `concert-this`

// * `spotify-this-song`

// * `movie-this`

// * `do-what-it-says`


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