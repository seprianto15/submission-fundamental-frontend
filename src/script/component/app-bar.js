class AppBar extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.render();
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
            .header {
                display: block;
                height: 100px;
                background: black;
                color: #fff;
                position: sticky;
                top: 0;
            }
            h2 {
                padding: 0 50px;
                float: left;
                font-size: 24px;
                letter-spacing: 1.5px;
                line-height: 100px;
                font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
                text-transform: uppercase;
            }
            nav ul {
                float: right;
                padding: 0 50px;
            }
            nav ul li {
                display: inline-block;
                line-height: 100px;
            }
            nav ul li a {
                position: relative;
                color: #fff;
                font-size: 20px;
                text-transform: uppercase;
                font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
                letter-spacing: 1.5px;
            }
            nav ul li a:before {
                position: absolute;
                content: '';
                left: 0;
                bottom: -5px;
                height: 3px;
                width: 100%;
                background: #EEEEEE;
                transform: scaleX(0);
                transform-origin: right;
                transition: transform .3s linear;
            }
            nav ul li a:hover:before {
                transform: scaleX(1);
                transform-origin: left;
            }

            @media screen and (max-width: 960px) {
                h2 {
                    display: none;
                }
                nav ul {
                    padding: 0 20px;
                }
            }
        </style>
        <div class="header">
        <h2>Dolphin Movie</h2>
        <nav>
            <ul>
                <li><a href="">Home</a></li>
            </ul>
        </nav>
        </div>`;
  }
}

customElements.define('app-bar', AppBar);
