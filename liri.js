require("dotenv").config();
var keys = require("./keys.js");
var spotify = new Spotify(keys.spotify);

// Concerts
    // node liri.js concert-this <artist/band name here>
    // "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp"
    // list each result along with: Name of the venue, Venue location, Date of the Event (use moment to format this as "MM/DD/YYYY")


// Spotify
    // node liri.js spotify-this-song '<song name here>'
    // list the following: Artist(s), Song name, A preview link of the song from Spotify, The album
    // Default: "The Sign" by Ace of Base


// Movies
    // node liri.js movie-this '<movie name here>' (API Key: trilogy)
    // Title, Year, IMDB Rating, Rotten Tomatoes Rating, Country where the movie was produced, Language, Plot, Actors
    // Default: Mr. Nobody


// Random
    // node liri.js do-what-it-says
    // uses fs node package to run spotify search on random.txt ("I Want it That Way")