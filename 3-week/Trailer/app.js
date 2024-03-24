require('dotenv').config();
const express = require('express');
const ejs = require('ejs');
const app = express();
const path = require('path');
const cookieParser = require('cookie-parser');
const axios = require('axios'); // Make sure Axios is required

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//EJS Engine setup for .html files, if you're using .ejs extension, adjust accordingly
app.set('view engine', 'ejs');
app.engine('html', ejs.renderFile);

const api_key = '37c3579814cafdcc1b8212ffc34993ff';

app.get('/movie/:id/trailers', async (req, res) => {
  // const movieId = req.params.id;
  const movieId = '763215';
  // const api_key = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzN2MzNTc5ODE0Y2FmZGNjMWI4MjEyZmZjMzQ5OTNmZiIsInN1YiI6IjY1ZjVmNWY5ZDhmNDRlMDE2MzRlZWQ1NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.xqxXb1-nAaRKKayR2IQSOAkjn7_21BosjYG9cUHMhYE';
  try {
    const response = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${api_key}&language=en-US`);
    
    // Attempt to find an official trailer
    let officialTrailer = response.data.results.find(video => video.type === 'Trailer' && video.name.includes('Official'));

    // Fallback to the first trailer if no "official" trailer is found
    if (!officialTrailer) {
      officialTrailer = response.data.results.find(video => video.type === 'Trailer');
    }

    // Pass the official trailer to the EJS template, or null if none found
    res.render('trailer', { trailer: officialTrailer || null });
  } catch (error) {
    console.error(error);
    res.send('Error fetching trailers');
  }
});

// app.get('/', async (req, res) => {
//   try {
//     const response = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.TMDB_API_KEY}&language=en-US&page=1`);
//     // const response = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${api_key}&language=en-US&page=1`);
//     const movies = response.data.results;
//     res.render('index', { movies });
//   } catch (error) {
//     console.error(error);
//     res.send('An error occurred');
//   }
// });

// const fetchMovieShowtimes = async (movieTitle, location) => {
//   const apiKey = process.env.SERPAPI_KEY;
//   const formattedMovieTitle = movieTitle.split(' ').join('+'); // Format movie title for URL
//   const formattedLocation = location.split(' ').join('+'); // Format location for URL

//   try {
//     const response = await axios.get('https://serpapi.com/search.json', {
//       params: {
//         q: `${formattedMovieTitle}+theater`,
//         location: formattedLocation,
//         hl: 'en',
//         gl: 'us',
//         api_key: apiKey
//       }
//     });

//     // Assuming the response contains the desired data in a property; adjust as needed
//     return response.data;
//   } catch (error) {
//     console.error('Error fetching movie showtimes from SerpAPI:', error);
//     throw error;
//   }
// };

// app.get('/showtimes', async (req, res) => {
//   const movieTitle = req.query.movieTitle || 'Eternals'; // Example default value
//   const location = req.query.location || 'Austin, Texas, United States'; // Example default value

//   try {
//     const showtimesData = await fetchMovieShowtimes(movieTitle, location);
//     res.render('showtimes', { showtimesData }); // Render your EJS template with the showtimes data
//   } catch (error) {
//     res.status(500).send("Failed to fetch showtimes");
//   }
// });

app.get('/',(req,res,next)=>{
  render('trailer');
})

app.listen(81, () => {
  console.log(`App listening at http://localhost:81`);
});
