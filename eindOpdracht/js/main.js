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
    placeToRenderMain;
    leftsection;
    rightsection;


    constructor(placeToRenderMain) {
        this.placeToRenderMain = document.getElementsByTagName(placeToRenderMain)[0];

        this.mainElement = document.createElement("main");
        this.mainElement.classList = "main";

        this.leftsection = new Mainleftsection(this.mainElement, this);
        this.rightsection = new Mainrightsection(this.mainElement);


    }

    makeCardsFromData(data) {
        this.leftsection.makeCardsFromData(data);
    }

    render() {
        this.placeToRenderMain.appendChild(this.mainElement)
        //leftsection
        this.leftsection.render();
        //rightsection
        this.rightsection.render();
    }
}

class Mainleftsection {
    mainElement;
    main;

    constructor(mainElement, main) {
        this.mainElement = mainElement;
        this.main = main;

        this.sectionLeft = document.createElement("section");
        this.sectionLeft.classList = "main__section main__section--left";

        this.cards = document.createElement("ul");
        this.cards.classList = "main__cards";
    }


    makeCardsFromData(data) {
        Object.entries(data).forEach((entry) => {




            console.log(entry[1]);

           // let randomNumbers = [];

            for (let i = 0; i < 4; i++) {
                let randomNumber = Math.floor(Math.random() * 7);

                this.card = document.createElement("li");
                this.card.classList = "main__card";
                this.card.onclick = () => {
                    this.bankymain.callFromLeftSection(entry[0], data);
                }

                this.cardButton = document.createElement("button");
                this.cardButton.classList = "main__card--button";

                this.cardImg = document.createElement("img");
                this.cardImg.classList = "main__card--img";
                this.cardImg.src = entry[1][randomNumber]["img"];
                this.cardImg.alt = "";

                this.cardTitel = document.createElement("h3");
                this.cardTitel.classList = "main__card--titel";
                this.cardTitel.innerText = entry[1][randomNumber]["title"];


                this.cardDatum = document.createElement("h3");
                this.cardDatum.classList = "main__card--datum";
                this.cardDatum.innerText = entry[1][randomNumber]["date (dd-mm-yyyy)"];




                this.cards.appendChild(this.card);
                this.card.appendChild(this.cardButton);
                this.cardButton.appendChild(this.cardImg);
                this.cardButton.appendChild(this.cardDatum);
                this.cardButton.appendChild(this.cardTitel);
            }

        }
    
        )
    }



    render() {
        this.mainElement.appendChild(this.sectionLeft);
        this.sectionLeft.appendChild(this.cards);
    }
}
class Mainrightsection {
    mainElement;

    constructor(mainElement) {
        this.mainElement = mainElement;

        this.sectionRight = document.createElement("section");
        this.sectionRight.classList = "main__section main__section--right";
    }




    render() {
        this.mainElement.appendChild(this.sectionRight)
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
            .getData().then((data) => {
                //this.Main.makeTransactionsFromData(data);
                this.Main.makeCardsFromData(data);

            });



        this.Header.render();
        this.Main.render();
        this.Footer.render();
    }
}

const app = new App();