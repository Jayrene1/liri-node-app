# liri-node-app

## About
This is a command line node app that can search for concerts, songs on spotify, and movie information. It accepts command line arguments as search terms, makes a request to the relevant API, and returns search results as a console log in the terminal window. 

I created the app as an exercise in node-based applications. I learned how to set up a .gitignore for node_modules, how to structure a packages.json file, how to hide sensitive API credentials in a .env file, and how to use the Axios node package to make API requests from Node.js. For users new to Node, the following documentation should make it easier to install the node package dependencies required before running the application.

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

### Installation

1. Check if Node.js is installed by typing `node -v` into terminal or command prompt (or follow this [tutorial](https://www.youtube.com/watch?v=qZQmCfkmbNA))
2. Clone or Download liri-node-app respository
3. Open terminal or command prompt and navigate to the root folder, i.e. (`cd C:\Users\...\Desktop\liri-node-app`)
4. Install node_module dependencies by typing `npm i` or `npm install`
5. Create a Spotify ID and Secret [here](https://developer.spotify.com/dashboard/)
6. create a file called ".env" in the root folder and paste your Spotify ID and Secret in the following format: 
```
    SPOTIFY_ID=0685378d7b42429f96bea79222909723
    SPOTIFY_SECRET=7b9fedf14c224fc6a686524c07636bd5
```

### How To Use

[Video Demo (2:13)](https://drive.google.com/file/d/1jdiL-9TTycA_UK5ef0-Ov3WVnu7DrWeM/view)

1. Open a terminal at root folder of liri-node-app
2. Type `node liri.js <command> <search>`
3. Valid commands:
    * `concert-this <name of artist>`
    * `spotify-this-song <name of song>`
    * `movie-this <name of movie>`
    * `do-what-it-says` *(does not require additional arguments)*
