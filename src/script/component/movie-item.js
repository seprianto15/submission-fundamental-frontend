class MovieItem extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({ mode: 'open' });
  }

  set movie(movie) {
    this._movie = movie;
    this.render();
  }

  render() {
    this.shadowDOM.innerHTML = `
        <style>
            * {
                margin: 0;
                padding: 0;
                box-sizing: border-box;
            }
            :host {
                display: block;
                background: #000000;
                background: -webkit-linear-gradient(to top, #434343, #000000);  
                background: linear-gradient(to top, #434343, #000000);
                color: #fff;
                box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
                overflow: hidden;
                padding: 20px;
            }
            .fan-art-movie {
                width: 25%;
                max-width: 500px;
                padding: 20px;
                float: left;
            }
            .movie-info {
                padding: 20px;
            }
            .movie-info > h2 {
                font-weight: lighter;
            }
            .movie-info > p {
                margin-top: 10px;
                overflow: hidden;
                text-overflow: ellipsis;
                text-align: justify;
            }
            @media screen and (max-width: 960px) {
                .fan-art-movie {
                    width: 100%;
                    padding: 10px;
                    display: block;
                }
            }
        </style>
        <img class = "fan-art-movie" src="https://image.tmdb.org/t/p/original/${this._movie.poster_path}">
        <div class = "movie-info">
            <h2>${this._movie.title}</h2>
            <p>${this._movie.overview}</p>
        </div>`;
  }
}
customElements.define('movie-item', MovieItem);
