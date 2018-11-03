# liri_node_app

Based on your search the liri_node_app is designed to pull specific information on music (concerts and songs) as well as movies. 

Using the command: node liri.js concert-this <artist/band name here>, your search will call on the Bands in Town Artist Events API for an artist and will provide the: Name of the venue, Venue location, Date of the Event (use moment to format this as "MM/DD/YYYY"). See screen shot for demo:

![image](https://user-images.githubusercontent.com/40874591/47947281-2e978780-def0-11e8-8d81-191d2adc98f9.png)

Next is the option to call on information for a specific song. The command is node liri.js spotify-this-song '<song name here>'. Once called this will access the Spotify API and will return the following information about the song: Artist(s), the song's name, a preview link of the song from Spotify, the album that the song is from and if no song is provided then your program will default to "The Sign" by Ace of Base.
  
![image](https://user-images.githubusercontent.com/40874591/47947301-9bab1d00-def0-11e8-95a1-967342da55b6.png)
  
  
Third is a call on movie information. Using the OMDB API with the following command, node liri.js movie-this '<movie name here>', the following will display: Title of the movie, year the movie came out, IMDB Rating of the movie, Rotten Tomatoes Rating of the movie, country where the movie was produced, language of the movie, plot of the movie, actors in the movie.
  
![image](https://user-images.githubusercontent.com/40874591/47947510-23465b00-def4-11e8-862f-bcf62a1e594b.png)
  
 If the user doesn't type a movie in, the program will output data for the movie 'Mr. Nobody.' See example below.
 
![image](https://user-images.githubusercontent.com/40874591/47947528-6ef90480-def4-11e8-967d-eac0d7481176.png)

 Finally, do-what-it-says. Using the fs Node package, LIRI will take the text inside of random.txt and then use it to call one of LIRI's commands. It should run spotify-this-song for "I Want it That Way," as follows the text in random.txt.
 
![image](https://user-images.githubusercontent.com/40874591/47947536-b089af80-def4-11e8-8ea1-d51cf8a2ce56.png)

