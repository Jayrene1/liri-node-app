# liri-node-app

## About
A command line node app that can search for concerts, songs on spotify, and movie information

![App Screenshot](/Readme_screenshots/command-prompt.PNG)

### APIs Used
* [Bands In Town](http://www.artists.bandsintown.com/bandsintown-api/?locale=en)
* [Spotify](https://developer.spotify.com/documentation/web-api/quick-start/)
* [Open Movie Database](http://www.omdbapi.com/)

### Node Packages Used
* [Axios](https://www.npmjs.com/package/axios)
* [Dotenv](https://www.npmjs.com/package/dotenv)
* [Moment](https://www.npmjs.com/package/moment)
* [Node Spotify API](https://www.npmjs.com/package/node-spotify-api)

## Documentation

### How To Use

[Video Demo (2:13)](https://drive.google.com/file/d/1jdiL-9TTycA_UK5ef0-Ov3WVnu7DrWeM/view)

1. Open a terminal at root folder of liri-node-app
2. Type `node liri.js <command> <search>`
3. Valid commands:
    * `concert-this <name of artist>`
    * `spotify-this-song <name of song>`
    * `movie-this <name of movie>`
    * `do-what-it-says` *(does not require additional arguments)*
