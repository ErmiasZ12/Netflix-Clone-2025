const API_KEY = Process.env.REACT_APP_API_KEY;
const requests = {
  fetchtTrending: `./trending/all/week?api_key=${API_KEY}&language=en-US`,
  fetchtNetflixOriginals: `./discover/tv?api_key=${API_KEY}&with_networks=213`,
  fetchtTopRatedMovie: `./movie/top_rated??api_key=${API_KEY}&language=en-US`,
  fetchtActionMovie: `./discover/movie?api_key=${API_KEY}&with_genres=28`,
  fetchtComedyMovie: `./discover/movie?api_key=${API_KEY}&with_genres=35`,
  fetchtHorrorMovie: `./discover/movie?api_key=${API_KEY}&with_genres=27`,
  fetchtromanceMovie: `./discover/movie?api_key=${API_KEY}&with_genres=10749`,
  fetchtDocumentaries: `./discover/movie?api_key=${API_KEY}&with_genres=99`,
  fetchtTVShows: `./tv/popular?api_key=${API_KEY}&language=en-US&page=1`,
};
export default requests;