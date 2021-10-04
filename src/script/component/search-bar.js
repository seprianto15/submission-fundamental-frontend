class SearchBar extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.render();
  }

  set clickEvent(event) {
    this._clickEvent = event;
    this.render();
  }

  get value() {
    return this.shadowDOM.querySelector('#searchElement').value;
  }

  render() {
    this.shadowDOM.innerHTML = `
        <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            list-style: none;
            text-decoration: none;
        }    
        .container {
            max-width: 1170px;
            width: 100%;
            padding: 0 20px;
            margin: 0 auto;
        }
        .top-wrapper {
            background-image: url("https://i.postimg.cc/gJN368y1/cover.jpg");
            background-repeat: no-repeat;
            -webkit-background-size: cover;
            background-size: cover;
            background-position: center;
            color:#fff;
            text-align: center;
            height: 84vh;
            width: 100%;
            display: flex;
            flex: auto;
            justify-content: center;
            align-items: center;
            padding: 150px 0 150px 0;
            font-family: 'Times New Roman', Times, serif;
            font-weight: bold;
        }
        .top-wrapper h2 {
            font-size: 50px;
            letter-spacing: 5px;
            margin-bottom: 10px;
            text-transform: uppercase;
        }
        .top-wrapper h3 {
            font-size: 45px;
            margin-bottom: 10px;
        }
        .search-containter {
            width: 100%;
            position: relative;
            display: flex;
        }
        .search-container > input {
            width: 95%;
            margin-top: 20px;
            border: 5px solid #ffffff;
            border-right: none;
            padding: 5px;
            height: 50px;
            outline: none;
            margin-bottom: 10px;
        }
        .search-container > input:focus {
            box-shadow: 0 0 5px #141E30;
            outline: none;
        }
        .search-container > button {
            width: 5%;
            height: 50px;
            border: 2px solid #141E30; 
            background: black;
            border-radius: 0 5px 5px 0;
            cursor: pointer;
            margin-left: -5px;
            color: white;
            outline: none;
        }
        .search-container > button:active {
            background: #141E30;
            color: #fff;
        }

        @media screen and (max-width: 960px){
            .top-wrapper {
                width: 100%;
                padding: 140px 0 140px 0;
            }
            .top-wrapper h2 {
                font-size: 40px;
                letter-spacing: 5px;
                margin-bottom: 10px;
                text-transform: uppercase;
                color : black;
            }
            .top-wrapper h3 {
                font-size: 30px;
                margin-bottom: 10px;
                color : black;
            }
            .search-container {
                position: static;
            }

            .search-container > input {
                width: 85%;
                margin-bottom: 12px;
            }
            .search-container > button {
                width: 15%;
            }
        }
        </style>
        <div class="top-wrapper">
            <div class="container">
                <h2>Dolphin Movie</h2>
                <h3>Situs Movie Terkini & Terlengkap</h3>
                <div id="search-container" class="search-container">
                    <input placeholder="Cari movie favoritmu" id="searchElement" type="search">
                    <button id="searchButtonElement" type="submit">Search</button>
                </div>
            </div>
        </div>    
        `;

    this.shadowDOM.querySelector('#searchButtonElement').addEventListener('click', this._clickEvent);
  }
}

customElements.define('search-bar', SearchBar);
