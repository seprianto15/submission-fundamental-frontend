import axios from 'axios';

class DataSource {
  static searchMovie(keyword) {
    return axios
      .get(
        `https://api.themoviedb.org/3/search/movie?api_key=49a76392cdf739a6058bb79f0aa78dad&language=en-US&page=1&include_adult=false&query=${keyword}`,
      )
      .then((movies) => {
        const data = movies.data.results;
        return data;
      })
      .catch(() => { 'error'; });
  }
}

export default DataSource;
