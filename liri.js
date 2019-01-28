require("dotenv").config();
var axios = require("axios");
var Spotify = require("node-spotify-api");
var keys = require("./keys.js");
var spotify = new Spotify(keys.spotify);
var cmd = process.argv[2];
var search = process.argv.slice(3);
var border = "\n ====================================================== \n";
// search = search.join("+");

console.log("command: " + cmd + " || search: " + search);

// read command
if (cmd === "concert-this") {
    concerts();
} else if (cmd === "spotify-this-song") {
    spotifySearch();
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
            // list each result along with: Name of the venue, Venue location, Date of the Event (use moment to format this as "MM/DD/YYYY")
            for (var i = 0; i < response.data.length; i ++) {
                let venue = `${response.data[i].venue.name} in ${response.data[i].venue.city}, ${response.data[i].venue.city}`;
                let date = response.data[i].datetime; // TODO; convert date format with moment.js
                console.log(`${border} Concert ${i + 1} \n ${venue} \n ${date}`);
            }
        }).catch(function(error) {
            console.log(error);
        });
}

// Spotify
function spotifySearch() {
    var song = search.join(" ");
    spotify.search({type: 'track', query: song, limit: 5}, function(error, data) {
        if (error) {
            return console.log('Error occurred: ' + error);
        }
        for (var i = 0; i < data.tracks.items.length; i++) {
            let s = data.tracks.items[i];
            let a = [];

            if (s.artists.length > 1) { // checks for multiple artists
                for (var i = 0; i < s.artists.length; i++) {
                    a.push(s.artists[i].name);
                }
                a = a.join(", ");
            } else {
                a = s.artists[0].name;
            }
        
            console.log(`${border}\nArtist(s): ${a}\nSong Name: ${s.name}\nAlbum: ${s.album.name}\nLink: ${s.external_urls.spotify}`);
        }
    });
    // list the following: Artist(s), Song name, A preview link of the song from Spotify, The album
    // Default: "The Sign" by Ace of Base

}


// Movies
function movie() {
    var movie = search.join("+");
    axios.get("http://www.omdbapi.com/?apikey=trilogy&t=" + movie + "&type=movie")
        .then(function(response) { 
            // Title, Year, Actors, Plot, IMDB Rating, Rotten Tomatoes Rating, Country, Language
            let m = response.data;
            console.log(`${border + m.Title}\nYear: ${m.Year}\nActors: ${m.Actors}\nPlot: ${m.Plot}\nIMDB rating: ${m.imdbRating} || Rotten Tomatoes rating: ${m.Ratings[1].Value}\nCountry: ${m.Country}\nLanguage: ${m.Language}\n`);
        }).catch(function(error) {
            console.log(error);
        });
    // Default: Mr. Nobody

}


// Random
function random() {
    // node liri.js do-what-it-says
    // uses fs node package to run spotify search on random.txt ("I Want it That Way")
}
