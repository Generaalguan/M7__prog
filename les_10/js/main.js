class Api {
    data = null;
    async getData() {
        await fetch("../data/games.json").then(response => {
            return response.json();
        }).then(newData => {
            this.data = newData.games;
        });
    }

}

class Filter {
    filteredResult = [];


    filter(platform, data) {
        for (let i = 0; i < data.length; i++) {
            if (data[i].platform === platform) {
                this.filteredResult.push(data[i]);

            }
        }

    }

    randomFromResult() {
        let randomNumber = Math.floor(Math.random() * this.filteredResult.length) // 0, 1, 2
        return this.filteredResult[randomNumber];

    }
}

class URLScraper {
    currentURL;
    platform;
    pretty;

    constructor() {
        this.currentURL = window.location.href;


    }


    getDataFromURL() {
        this.platform = this.currentURL.split("platform=")[1];
        this.pretty = new PrettyPlatform(this.platform);
        this.platform = this.pretty.platform;
    }
}

class PrettyPlatform {
    platform;
    constructor(platform) {
        this.platform = platform;

        this.platformtoUpperCase();
        this.removeSpaces();
    }

    platformtoUpperCase() {
        this.platform = this.platform.toUpperCase();
    }

    removeSpaces() {
        this.platform = this.platform.replaceAll("", "");
        this.platform = this.platform.replaceAll("%20", "");
    }
}

class Render {
    render(randomResult) {
        //body > article > h1
        const articleToBeRendered = document.createElement("article");
        articleToBeRendered.classList = "card";
        document.getElementsByTagName("body")[0].appendChild(articleToBeRendered);


        const headingToBeRendered = document.createElement("h1");
        headingToBeRendered.classList = "card__heading";
        document.getElementsByTagName("article")[0].appendChild(headingToBeRendered);
        headingToBeRendered.innerText = randomResult.title;
    }
}

class App {
    api;
    filter;
    urlscraper;
    render;

    constructor() {
        this.api = new Api();
        this.filter = new Filter();
        this.urlscraper = new URLScraper();
        this.render = new Render();

        this.urlscraper.getDataFromURL()
        this.api.getData().then(
            () => {
                this.filter.filter(this.urlscraper.platform, this.api.data);
                this.render.render(this.filter.randomFromResult());



            });

    }


}

const app = new App();