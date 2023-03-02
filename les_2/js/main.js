class Cookie{
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

    onStyleChange(){
        this.htmlElement.classList.add("cookie--chocolate");
        this.htmlElement.classList.remove("cookie--redvelvet");
    }

    onredChange(){
        this.htmlElement.classList.add("cookie--redvelvet");
        this.htmlElement.classList.remove("cookie--chocolate");
    }
}

class Score{
    score = "";
    name = "";
    htmlElement = undefined;

    constructor(newScore, newName, newHtmlElement) {
        this.score = newScore;
        this.name = newName;
        this.htmlElement = newHtmlElement;
        this.htmlElement.innerText = newScore;
    }
    onCookieClicked(factorFromCookie){
        this.score = this.score + factorFromCookie;
        this.htmlElement.innerText = this.score ;
    }

    subtractScore(){
        this.score = this.score - 100;
        this.htmlElement.innerText = this.score;
    }

    onAutoClicked = () => {
        setInterval( () => {
            this.score = this.score + 500;
            this.htmlElement.innerText = this.score;
        }, 10000)
    }

    addPoints() {
        this.score = this.score + 10000;
        this.htmlElement.innerText = this.score;
    }
}

class Multiplier{
    factor = 100;
    htmlElement = undefined;
    cookie = undefined;
    bought = false;

    constructor(htmlElement, cookie){
        this.htmlElement = htmlElement;
        this.cookie = cookie;
        this.htmlElement.onclick = this.onMultiplierClicked;
    }

    onMultiplierClicked = () => {
        if (this.bought === false){
            this.bought = true;
            this.cookie.score.subtractScore();
            this.cookie.factor = this.factor;
        }
    }
}

class Auto{
    htmlElement = undefined;
    score = undefined;
    bought = false;
    

    constructor(htmlElement) {
        this.htmlElement = htmlElement;
        this.score = score;
        this.htmlElement.onclick = this.onAutoClicked;

    }

    onAutoClicked = () => {
        if (this.bought === false) {
            this.bought = true;
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
        if (this.bought === false) {
            this.bought = true;
            this.cookie.onStyleChange();
            this.cookie.score.addPoints();
        }
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
        if (this.bought === false) {
            this.bought = true;
            this.cookie.onredChange();
            this.cookie.score.addPoints();
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
/* mobile upgrades */
const multiplierMobile = new Multiplier(document.getElementById("js--multiplier--mobile"),cookie);
const autoMobile = new Auto(document.getElementById("js--auto--mobile"), score);
const chocoMobile = new Chocolate(document.getElementById("js--chocolate--mobile"), cookie);
const redvelvetmobile = new Redvelvet(document.getElementById("js--redvelvet--mobile"), cookie);




