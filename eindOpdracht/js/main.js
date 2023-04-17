class GetDataFromApi {
    url = "";
    data = null;
    constructor(newURL) {
        this.url = newURL
    }

    async getData() {

        await fetch(this.url)
            .then(function (response) {
                return response.json();
            }).then((data) => {
                this.data = data;
            });
        return this.data;
    }
}

class Header {
    headerElement;
    placeToRenderHeader;

    constructor(placeToRenderHeader) {
        this.placeToRenderHeader = document.getElementsByTagName(placeToRenderHeader)[0];

        this.headerElement = document.createElement("header");
        this.headerElement.classList = "header";

        this.headerLogo = document.createElement("i");
        this.headerLogo.classList = "fa-solid fa-podcast  header__logo";

        this.headerText = document.createElement("h1");
        this.headerText.classList = "header__text"
        this.headerText.innerText = "Collection of Happiness";


        
    }

    render() {
        this.placeToRenderHeader.appendChild(this.headerElement);
        this.headerElement.appendChild(this.headerLogo);
        this.headerElement.appendChild(this.headerText);
    }
}

class Main {
    Main;
    placeToRenderMain;

    constructor(placeToRenderMain) {
        this.placeToRenderMain = document.getElementsByTagName(placeToRenderMain)[0];

        this.mainElement = document.createElement("main");
        this.mainElement.classList = "main";


        
    }

    render() {
       this.placeToRenderMain.appendChild(this.mainElement)
    }
}

class Footer {
    Footer;
    placeToRenderFooter;

    constructor(placeToRenderFooter) {
        this.placeToRenderFooter = document.getElementsByTagName(placeToRenderFooter)[0];

        this.footerElement = document.createElement("main");
        this.footerElement.classList = "footer";

        this.FooterText = document.createElement("h3");
        this.FooterText.classList = "footer__text";
        this.FooterText.innerText = "Gemaakt door -  Bilal el Koudadi SD2C MediaCollege";

        
    }

    render() {
        this.placeToRenderFooter.appendChild(this.footerElement);
        this.footerElement.appendChild(this.FooterText);
        
    }
}


class App {
    Header;
    Main;
    Footer;
    GetDataFromApi;

    constructor() {
        this.Header = new Header("body");
        this.Main = new Main("body");
        this.Footer = new Footer("body");

        this.GetDataFromApi = new GetDataFromApi("./json/data.json");

        this.GetDataFromApi
            // .getData().then((data) => {
            //     this.Main.makeTransactionsFromData(data);
            //     this.Main.makeButtonsFromData(data);

            // });



        this.Header.render();
        this.Main.render();
        this.Footer.render();
    }
}

const app = new App();