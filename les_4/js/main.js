class colorCard{ //je maakt hier een nieuwe blauwdruk aan
    id;          //je geeft het een id
    color;       //je geeft het een kleur
    addToList;   //je zecht dat het in een list moet
    htmlElement; //het is een htlmelement
    circle;      // het heeft een circle
    text;

    constructor(newId, newColor, addToList) { //je hebt een nieuwe constructor, daar geef je een nieuwe Id en kleur
        this.id = newId;            //je zecht dat het id een het nieuwe id is
        this.color = newColor;      //je zecht dat het color een het nieuwe color is
        this.addToList = addToList; 


        this.htmlElement = document.createElement("li");    //je maakt een nieuwe li aan en die geef je een classe
        this.htmlElement.classList = "colors__color";

        this.circle = document.createElement("figure");     //je maakt een nieuwe figure aan met die geef je een classe en je geeft het de kleur van de circle
        this.circle.classList = "colors__circle";
        this.circle.style.background = this.color;

        this.text = document.createElement("p");            //je maakt een nieuwe paragraaf die heeft het woord "copied" en die heeft ook een classe
        this.text.innerText = "copied";
        this.text.classList = "colors__text";


        this.htmlElement.onclick = this.onHtmlElementClicked;       //je zecht dat de htmlelement een onclick heeft

        this.render(); // je voert de render functie uit

    }

    onHtmlElementClicked = () => {  //met de htmloncklick zeg je dat de circle een extra classe krijgt, dan verander je de title van de site met de kleur die je aan tikt en je coppierd die kleur
        this.circle.classList.add("colors__circle--selected");
        document.title = this.color;
        window.navigator.clipboard.writeText(this.color);
    }

    render() {  //nu render je de li, circle en text in de html
        this.addToList.appendChild(this.htmlElement);
        this.htmlElement.appendChild(this.circle);
        this.htmlElement.appendChild(this.text);
    }
}

class ColorList{
    id; //je geeft een id aan
    htmlElement; //je geeft een htmlelement mee


    constructor(newId){ 
        this.id = newId; //je pakt een nieuwe id
        this.htmlElement = document.createElement("ul"); //je zecht dat het html element een ul is die je hier creërt
        this.htmlElement.id = this.id;  //je geeft de ul een id
        this.htmlElement.classList = "colors";  //je geeft de ul een nieuwe classe
        this.render();  //je gebruikt de render functie
    }

    render() {
        document.querySelector("body").appendChild(this.htmlElement);   //je zecht dat je de ul in de bosy zet
    }
}


class HSLGenerator{
    randomhue;  //geeft aan dat je een random hue nodig hebt
    randomsaturation;   //geeft aan dat je een random saturation nodig hebt
    randomwhiteness;    //geeft aan dat je een random whiteness nodig hebt
    hsl;    //dat zijn de 3 bovenstaande in een

    constructor() {
        this.generateHSL(); //je roept de functie uit
    }
    
    generateH = function () {
        this.randomhue = Math.floor( Math.random() * (360 - 1) + 1); // je zecht dat de randomhue ergens tussen 1deg en 360deg zit
    }
    generateS = function () {
        this.randomsaturation = Math.floor( Math.random() * (79 - 11) + 11) + "%"; //je zecht dat de randomsaturation tussen 79 en 11 zit in procenten
    }
    generateL = function () {
         this.randomwhiteness = Math.floor(Math.random() * (100 - 11) + 11) + "%"; //je zecht dat de randomwhiteness tussen 100 en 11 zit in procenten
    }
    generateHSL = function () { //deze functie roept de andere functies uit
        this.generateH();
        this.generateS();
        this.generateL();
        this.hsl = `hsl(${this.randomhue}, ${this.randomsaturation}, ${this.randomwhiteness})`; //met de random hue, saturation, whiteness wordt het een hsl kleur
    }
}

class App{
    id;
    ColorList;  //je hebt de vorige blauw print nodig
    HSLGenerator;   //je hebt de vorige blauwprint nodig

    constructor(newId) {
        this.id = newId;
        this.ColorList = new ColorList(this.id);    //je zecht dat deze Colorlist de vorige blauwprint genaamd colorlist is
        this.HSLGenerator = new HSLGenerator();     //je zecht dat deze HSLGenerator de vorige blauwprint is
        this.generateColorCards();  //je roept  de functie uit
    }

    generateColorCards = function () {
        for (let i = 1; i < 1001; i++){ //een for loop dat 1000 keer uitvoert
        this.HSLGenerator.generateHSL();    //je pakt de functie van HSLGenerator
            new colorCard(i, this.HSLGenerator.hsl, document.getElementById(this.ColorList.id));    //elke kaartje voer je 1000 keer uit, de kleur die je pakt komt uit de HSLGenerators hsl, dan zeg je dat het in de colorlist moet zitten
        }
    }
}

const app = new App("js--app");// je zecht nu dat hij alles moet uit voeren

