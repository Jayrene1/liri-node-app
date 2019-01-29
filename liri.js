require("dotenv").config();
var fs = require("fs");
var axios = require("axios");
var Spotify = require("node-spotify-api");
var moment = require('moment');
var keys = require("./keys.js");
var spotify = new Spotify(keys.spotify);
var cmd = process.argv[2];
var search = process.argv.slice(3);
var border = "\n======================================================\n";

console.log("command: " + cmd + " || search: " + search);

// read command
function readCmd() {
    if (cmd === "concert-this") {
        concerts();
    } else if (cmd === "spotify-this-song") {
        spotifySearch();
    } else if (cmd === "movie-this") {
        movie();
    } else if (cmd === "do-what-it-says") {
        random();
    } else {
        console.log("INVALID COMMAND\nTry: concert-this, spotify-this-song, movie-this, do-what-it-says");
    }
}

readCmd();

// Concerts
function concerts() {
    fs.readFile("guitar.txt", "utf8", function(error, data) {
        if (error) {
            return console.log(error);
        }
        console.log(data);
    });    

    var artist;
    if (search == "") {
        console.log("ERROR: Please enter an artist");
    } else {
        artist = search.join("+");
        axios.get("https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp")
            .then(function(response) {
                for (var i = 0; i < response.data.length; i ++) {
                    let venue = `${response.data[i].venue.name} in ${response.data[i].venue.city}, ${response.data[i].venue.country}`;
                    let date = response.data[i].datetime.substr(0, 10);
                    console.log(`${border}Concert ${i + 1}\n${venue}\nDate: ${moment(date, "YYYY-MM-DD").format("MM/DD/YYYY")}`);
                }
            }).catch(function(error) {
                console.log(error);
            });
    }
}

// Spotify
function spotifySearch() {
    fs.readFile("spotify.txt", "utf8", function(error, data) {
        if (error) {
            return console.log(error);
        }
        console.log(data);
    });    

    var song;
    if (search == "") {
        song = "The Sign Ace Of Base"; // defaults to "The Sign" when search is left blank
    } else {
        song = search.join(" ");
    }

    spotify.search({type: 'track', query: song, limit: 5}, function(error, data) {
        if (error) {
            return console.log('Error occurred: ' + error);
        }
        for (var i = 0; i < data.tracks.items.length; i++) { // for each track search result
            let s = data.tracks.items[i];
            let a = [];
            if (s.artists.length > 1) { // checks for multiple artists
                for (var j = 0; j < s.artists.length; j++) {
                    a.push(s.artists[j].name);
                }
                a = a.join(", ");
            } else {
                a = s.artists[0].name;
            }
            console.log(`${border}\nArtist(s): ${a}\nSong Name: ${s.name}\nAlbum: ${s.album.name}\nLink: ${s.external_urls.spotify}`);
        }
    });
}

// Movies
function movie() {
    fs.readFile("movies.txt", "utf8", function(error, data) {
        if (error) {
            return console.log(error);
        }
        console.log(data);
    });

    var movie;
    if (search == "") {
        movie = "mr+nobody"; // defaults to Mr. Nobody when search is left blank
    } else {
        movie = search.join("+");
    }

    axios.get("http://www.omdbapi.com/?apikey=trilogy&t=" + movie + "&type=movie")
        .then(function(response) { 
            let m = response.data;
            console.log(`${border}\nTitle: ${m.Title}\nYear: ${m.Year}\nActors: ${m.Actors}\nPlot: ${m.Plot}\nIMDB rating: ${m.imdbRating} || Rotten Tomatoes rating: ${m.Ratings[1].Value}\nCountry: ${m.Country}\nLanguage: ${m.Language}\n`);
        }).catch(function(error) {
            console.log(error);
        });
}

// Random
function random() {
    fs.readFile("random.txt", "utf8", function(error, data) {
        if (error) {
            return console.log(error);
        }
        console.log("Reading random.txt...")
        text = data.split(",");
        cmd = text[0]; // accepts 1st text file string as cmd
        search = text[1].split(" "); // accepts 2nd text file string as search and formats to match existing logic
        for(var i = 0; i < search.length; i++) {
            search[i] = search[i].replace('"', '');
        }
        readCmd(); //re-runs command parser with text file arguments
    });
}
