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

    callFromLeftSection(episode, data) {
        this.rightsection.makeDescriptionFromData(episode, data)
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
                    this.main.callFromLeftSection(entry[1][randomNumber], data);
                    console.log(entry[1][randomNumber], data);
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
        this.descriptionIMG.classList = "main__description--img";

        this.descriptionDate = document.createElement("h3");
        this.descriptionDate.classList = "main__description--date";

        this.descriptionTitle = document.createElement("h3");
        this.descriptionTitle.classList = "main__description--title"

        this.descriptionSummary = document.createElement("p");
        this.descriptionSummary.classList = "main__description--summary"

        this.descriptionAudio = document.createElement("audio");
        this.descriptionAudio.classList = "main__description--audio";
        this.descriptionAudio.setAttribute("controls", true);

        this.descriptionLink = document.createElement("a");


        this.descriptionBigWrapper = document.createElement("div");
        this.descriptionBigWrapper.classList = "main__description--bigWrapper";

        this.descriptionSummaryWrapper = document.createElement("article");
        this.descriptionSummaryWrapper.classList = "main__description--p";

        this.descriptionWrapper = document.createElement("div");
        this.descriptionWrapper.classList = "main__description--wrapper";

        this.descriptionSource = document.createElement("button");
        this.descriptionSource.classList = "main__description--button";
        this.descriptionSource.innerText = "Bron";

        this.descriptionIMG.src = "img/Gratitude.webp";
        this.descriptionDate.innerText = "24-11-2022";
        this.descriptionTitle.innerText = "How to Practice Gratitude When You're Not Feeling Thankful";
        this.descriptionSummary.innerText =  "We know that gratitude is good for us. But what can we do when we’re struggling to actually feel thankful? Our guest this week is author and podcast producer Stephanie Foo. Foo built a network of close friends around her in California, where she grew up. As a survivor of child abuse and Complex PTSD, her friends in California became her chosen family. And since she’s moved to New York City, she finds herself often pining for the Golden State and the people she loves there. This week, Foo tries a practice in mental subtraction, which gratitude researcher Ernst Bohlmeijer describes as an antidote to taking things for granted. Imagining her life if she didn’t live in New York helps Foo tap into gratitude even in the depths of winter – when she misses California the most. She even discovers her particular skill in getting the benefits of this practice by leaning into one of her PTSD symptoms. Later in the show, Ernst Bohlmeijer breaks down how keeping a gratitude practice can alter the emotions you’re likely to experience in a given day, and maybe even change you as a person.";
        this.descriptionAudio.src = "https://dts.podtrac.com/redirect.mp3/dovetail.prxu.org/_/192/f8cabe3b-d76e-46a2-8d3c-af1a752d82da/SoH_S07E13_Stephanie_Foo_SEG_1_mix_3.5.mp3";
        this.descriptionLink.href = "https://greatergood.berkeley.edu/podcasts/item/how_to_practice_gratitude_when_youre_not_feeling_thankful";


    }
    makeDescriptionFromData(episode, data) {

        console.log(data)

        this.descriptionIMG.src = episode["img"];
        this.descriptionDate.innerText = episode["date (dd-mm-yyyy)"];
        this.descriptionTitle.innerText = episode["title"];
        this.descriptionSummary.innerText = episode["summary"];
        this.descriptionAudio.src = episode["audio"];
        this.descriptionLink.href = episode["url"];


        this.descriptionFigure.appendChild(this.descriptionIMG);
        this.descriptionFigure.appendChild(this.descriptionDate);
        this.descriptionFigure.appendChild(this.descriptionTitle);
        this.descriptionSummaryWrapper.appendChild(this.descriptionSummary);
        this.descriptionWrapper.appendChild(this.descriptionAudio);
        this.descriptionWrapper.appendChild(this.descriptionLink);
    }

    render() {
        this.mainElement.appendChild(this.sectionRight);
        this.sectionRight.appendChild(this.rightDescription);
        this.rightDescription.appendChild(this.descriptionFigure);
        this.rightDescription.appendChild(this.descriptionBigWrapper);
        this.descriptionBigWrapper.appendChild(this.descriptionSummaryWrapper);
        this.descriptionBigWrapper.appendChild(this.descriptionWrapper);
        this.descriptionLink.appendChild(this.descriptionSource);
        this.descriptionFigure.appendChild(this.descriptionIMG);
        this.descriptionFigure.appendChild(this.descriptionDate);
        this.descriptionFigure.appendChild(this.descriptionTitle);
        this.descriptionSummaryWrapper.appendChild(this.descriptionSummary);
        this.descriptionWrapper.appendChild(this.descriptionAudio);
        this.descriptionWrapper.appendChild(this.descriptionLink);

    }
}


class Footer {
    Footer;
    placeToRenderFooter;

    constructor(placeToRenderFooter) {
        this.placeToRenderFooter = document.getElementsByTagName(placeToRenderFooter)[0];

        this.footerElement = document.createElement("footer");
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
                this.Main.makeCardsFromData(data);

            });



        this.Header.render();
        this.Main.render();
        this.Footer.render();
    }
}

const app = new App();