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
        
        this.rightDescription = document.createElement("div");
        this.rightDescription.classList = "main__description";

        this.descriptionFigure = document.createElement("figure");
        this.descriptionFigure.classList = "main__description--figure";

        this.descriptionIMG = document.createElement("img");
        this.descriptionIMG.src = "img/why.webp";
        this.descriptionIMG.classList = "main__description--img";

        this.descriptionDate = document.createElement("h3");
        this.descriptionDate.classList = "main__description--date";
        this.descriptionDate.innerText = "datum";

        this.descriptionTitle = document.createElement("h3");
        this.descriptionTitle.classList = "main__description--title"
        this.descriptionTitle.innerText = "titel";

        this.descriptionSummary = document.createElement("p");
        this.descriptionSummary.classList = "main__description--summary"
        this.descriptionSummary.innerText = "samenvatting";

        this.descriptionWrapper = document.createElement("div");
        this.descriptionWrapper.classList = "main__description--wrapper";

        this.descriptionAudio = document.createElement("audio");
        this.descriptionAudio.classList = "main__description--audio";
        this.descriptionAudio.src = "https://dts.podtrac.com/redirect.mp3/dovetail.prxu.org/_/192/e84d187e-db4d-4449-89ad-89c6871001f4/SoH_S07E18_Laura_Inserra_SEG_1_mix_4.mp3";

        this.descriptionLink = document.createElement("a");
        this.descriptionLink.href = "https://greatergood.berkeley.edu/podcasts/item/how_music_evokes_awe";

        this.descriptionSource = document.createElement("button");
        this.descriptionSource.classList = "main__description--button";
        this.descriptionSource.innerText = "source";


    }




    render() {
        this.mainElement.appendChild(this.sectionRight);
        this.sectionRight.appendChild(this.rightDescription);
        this.rightDescription.appendChild(this.descriptionFigure);
        this.descriptionFigure.appendChild(this.descriptionIMG);
        this.descriptionFigure.appendChild(this.descriptionDate);
        this.descriptionFigure.appendChild(this.descriptionTitle);
        this.rightDescription.appendChild(this.descriptionSummary);
        this.rightDescription.appendChild(this.descriptionWrapper);
        this.descriptionWrapper.appendChild(this.descriptionAudio);
        this.descriptionWrapper.appendChild(this.descriptionLink);
        this.descriptionLink.appendChild(this.descriptionSource);

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