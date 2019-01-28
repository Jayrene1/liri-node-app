require("dotenv").config();
var axios = require("axios");
var Spotify = require("node-spotify-api");
var keys = require("./keys.js");
var spotify = new Spotify(keys.spotify);
var cmd = process.argv[2];
var search = process.argv.slice(3);
var border = "====================================================== \n";
// search = search.join("+");

console.log("command: " + cmd + " || search: " + search);

// read command
if (cmd === "concert-this") {
    concerts();
} else if (cmd === "spotify-this-song") {
    spotify();
} else if (cmd === "movie-this") {
    movie();
} else if (cmd === "do-what-it-says") {
    random();
} else {
    console.log("INVALID COMMAND");
}

// Concerts
function concerts() {
    // node liri.js concert-this <artist/band name here>
    var artist = search.join("+");
    axios.get("https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp")
        .then(function(response) {
            console.table(border);
        }).catch(function (error) {
            console.log(error);
        });
    // "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp"
    // list each result along with: Name of the venue, Venue location, Date of the Event (use moment to format this as "MM/DD/YYYY")

}

// Spotify
function spotify() {
    // node liri.js spotify-this-song '<song name here>'
    // list the following: Artist(s), Song name, A preview link of the song from Spotify, The album
    // Default: "The Sign" by Ace of Base

}


// Movies
function movie() {
    // node liri.js movie-this '<movie name here>' (API Key: trilogy)
    // Title, Year, IMDB Rating, Rotten Tomatoes Rating, Country where the movie was produced, Language, Plot, Actors
    // Default: Mr. Nobody

}


// Random
function random() {
    // node liri.js do-what-it-says
    // uses fs node package to run spotify search on random.txt ("I Want it That Way")
}
