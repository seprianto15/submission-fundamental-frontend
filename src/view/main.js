import '../script/component/movie-list.js';
import '../script/component/search-bar.js';
import DataSource from '../script/data/data-source.js';

const main = () => {
  const searchElement = document.querySelector('search-bar');
  const movieListElement = document.querySelector('movie-list');

  const onButtonSearchClicked = async () => {
    try {
      const result = await DataSource.searchMovie(searchElement.value);
      if (result !== undefined) {
        renderResult(result);
      } else {
        fallbackResult('Jangan memasukan teks kosong');
      }
    } catch (message) {
      fallbackResult(message);
    }
  };

  const renderResult = (results) => {
    movieListElement.movies = results;
  };

  const fallbackResult = (message) => {
    movieListElement.renderError(message);
  };

  searchElement.clickEvent = onButtonSearchClicked;
};

export default main;
