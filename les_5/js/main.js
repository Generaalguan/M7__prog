class Cookie {
    name = "";
    htmlElement = undefined;
    score = undefined;
    factor = 1;

    constructor(newName, newHtmlElement, newScore) {
        this.name = newName;
        this.htmlElement = newHtmlElement;
        this.htmlElement.onclick = this.onCookieClicked;
        this.score = newScore;

    }

    onCookieClicked = () => {
        this.score.onCookieClicked(this.factor);
    }

    onStyleChange() {
        this.htmlElement.classList.add("cookie--chocolate");
        this.htmlElement.classList.remove("cookie--redvelvet");
    }

    onredChange() {
        this.htmlElement.classList.add("cookie--redvelvet");
        this.htmlElement.classList.remove("cookie--chocolate");
    }
}

class Score {
    score = "";
    name = "";
    htmlElement = undefined;

    constructor(newScore, newName, newHtmlElement) {
        this.score = newScore;
        this.name = newName;
        this.htmlElement = newHtmlElement;
        this.htmlElement.innerText = newScore;
    }
    onCookieClicked(factorFromCookie) {
        this.score = this.score + factorFromCookie;
        this.htmlElement.innerText = this.score;
    }

    subtractScore() {
        this.score = this.score - 100;
        this.htmlElement.innerText = this.score;
    }

    onAutoClicked = () => {
        setInterval(() => {
            this.score = this.score + 500;
            this.htmlElement.innerText = this.score;
        }, 500)
    }

    addPoints() {
        this.score = this.score + 10000;
        this.htmlElement.innerText = this.score;
    }

    scoreLoaded(newScore) {
        this.score = newScore;
        this.htmlElement.innerText = this.score;
    }
}

class Multiplier {
    factor = 100;
    htmlElement = undefined;
    cookie = undefined;
    bought = false;

    constructor(htmlElement, cookie) {
        this.htmlElement = htmlElement;
        this.cookie = cookie;
        this.htmlElement.onclick = this.onMultiplierClicked;
    }

    onMultiplierClicked = () => {
        if (this.bought === false && window.localStorage.getItem("multi") !== "true") {
            this.bought = true;
            window.localStorage.setItem("multi", this.bought);
            this.cookie.score.subtractScore();
            this.cookie.factor = this.factor;
        }
    }
}

class Auto {
    htmlElement = undefined;
    score = undefined;
    bought = false;


    constructor(htmlElement) {
        this.htmlElement = htmlElement;
        this.score = score;
        this.htmlElement.onclick = this.onAutoClicked;

    }

    onAutoClicked = () => {
        if (this.bought === false && window.localStorage.getItem("auto") !== "true") {
            this.bought = true;
            window.localStorage.setItem("auto", this.bought);
            this.score.subtractScore();
            score.onAutoClicked();
            }
        }

    
}

class Chocolate {
    htmlElement = undefined;
    bought = false;
    cookie = undefined;

    constructor(htmlElement, cookie) {
        this.htmlElement = htmlElement;
        this.cookie = cookie;
        this.htmlElement.onclick = this.onchocolateClicked;
    }

    onchocolateClicked = () => {
        if (this.bought === false && window.localStorage.getItem("chocolate") !== "true") {
            this.bought = true;
            window.localStorage.setItem("chocolate", this.bought);
            this.cookie.score.addPoints();
        }
        this.cookie.onStyleChange();
    }

}

class Redvelvet {
    htmlElement = undefined;
    bought = false;
    cookie = undefined;

    constructor(htmlElement, cookie) {
        this.htmlElement = htmlElement;
        this.cookie = cookie;
        this.htmlElement.onclick = this.onredvelvetClicked;

    }

    onredvelvetClicked = () => {
        if (this.bought === false && window.localStorage.getItem("redvelvet") !== "true") {
            this.bought = true;
            window.localStorage.setItem("redvelvet", this.bought);
            this.cookie.score.addPoints();
        }
        this.cookie.onredChange();
    }


}

class Save {
    htmlElement;

    constructor(newHtmlElement) {
        this.htmlElement = newHtmlElement;
        this.htmlElement.onclick = this.onSaveClicked;



    }

    onSaveClicked = () => {
        window.localStorage.setItem("score", score.score);


    }
}

class Load {
    score;

    constructor(score) {
        this.score = score;
        this.onload();
    }

    onload = () => {

        const scoreFromLocalStorage = window.localStorage.getItem("score");
        if (scoreFromLocalStorage !== null) {
            this.score.scoreLoaded(parseInt(scoreFromLocalStorage));

        }
        const autoFromLocalStorage = window.localStorage.getItem("auto");
        if (autoFromLocalStorage === "true"){
            this.score.onAutoClicked();
        }
        const multiFromLocalStorage = window.localStorage.getItem("multi");
        if (multiFromLocalStorage === "true") {
            multiplier.cookie.factor = multiplier.factor;
        }
    }
    

}

/* score en cookie */
const score = new Score(0, "Default Score", document.getElementById("js--score"));
const cookie = new Cookie("Default Cookie", document.getElementById("js--cookie"), score);
/* desktop upgrades*/
const multiplier = new Multiplier(document.getElementById("js--multiplier"), cookie);
const auto = new Auto(document.getElementById("js--auto"), score);
const chocolate = new Chocolate(document.getElementById("js--chocolate"), cookie);
const redvelvet = new Redvelvet(document.getElementById("js--redvelvet"), cookie);
//opslaan
const save = new Save(document.getElementById("js--save"));
const load = new Load(score);
/* mobile upgrades */
const multiplierMobile = new Multiplier(document.getElementById("js--multiplier--mobile"), cookie);
const autoMobile = new Auto(document.getElementById("js--auto--mobile"), score);
const chocoMobile = new Chocolate(document.getElementById("js--chocolate--mobile"), cookie);
const redvelvetmobile = new Redvelvet(document.getElementById("js--redvelvet--mobile"), cookie);

