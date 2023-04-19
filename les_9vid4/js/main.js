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
    figureElement;
    logoIElement;
    logoHeading;
    avatarWrapperElement;
    avatarBodyElement;
    avatarElement;
    avatarHeadElement;
    placeToRenderHeader;

    constructor(placeToRenderHeader) {
        this.placeToRenderHeader = document.getElementsByTagName(placeToRenderHeader)[0];

        this.headerElement = document.createElement("header");
        this.headerElement.classList = "header";

        this.figureElement = document.createElement("figure");
        this.figureElement.classList = "header__logo";

        this.logoIElement = document.createElement("i");
        this.logoIElement.classList = "fa-solid fa-sack-dollar";

        this.logoHeading = document.createElement("h1");
        this.logoHeading.classList = "header__banky";
        this.logoHeading.innerText = "Banky";

        this.avatarWrapperElement = document.createElement("div");
        this.avatarWrapperElement.classList = "avatarWrapper";

        this.avatarElement = document.createElement("figure");
        this.avatarElement.classList = "avatar";

        this.avatarHeadElement = document.createElement("div");
        this.avatarHeadElement.classList = "avatar__head";

        this.avatarBodyElement = document.createElement("div");
        this.avatarBodyElement.classList = "avatar__body";
    }

    render() {
        this.placeToRenderHeader.appendChild(this.headerElement);
        this.headerElement.appendChild(this.figureElement);
        this.figureElement.appendChild(this.logoIElement);
        this.figureElement.appendChild(this.logoHeading);
        this.headerElement.appendChild(this.avatarWrapperElement);
        this.avatarWrapperElement.appendChild(this.avatarElement);
        this.avatarElement.appendChild(this.avatarHeadElement);
        this.avatarElement.appendChild(this.avatarBodyElement);


    }
}

class Bankymain {
    placeToRenderBankyMain;
    leftSection;
    rightSection;
    constructor(placeToRenderBankyMain) {

        this.placeToRenderBankyMain = document.getElementsByTagName(placeToRenderBankyMain)[0];

        this.mainElement = document.createElement("main");
        this.mainElement.classList = "banky";

        this.leftSection = new Bankyleftsection(this.mainElement);
        this.rightSection = new Bankyrightsection(this.mainElement, this.leftSection);

    }

    makeButtonsFromData(data) {
        this.rightSection.makeButtonsFromData(data);
    }

    makeTransactionsFromData(data) {
        this.leftSection.makeTransactionsFromData("Bankrekening", data);
    }

    render() {
        this.placeToRenderBankyMain.appendChild(this.mainElement);
        //left
        this.leftSection.render();
        //right
        this.rightSection.render();


    }
}

class Bankyleftsection {
    mainElement;
    constructor(mainElement) {
        this.mainElement = mainElement;

        this.sectionLeft = document.createElement("section");
        this.sectionLeft.classList = "banky__section banky__section--left";

        this.headerElement = document.createElement("header");
        this.headerElement.classList = "banky__header";

        this.divElement = document.createElement("div");

        this.figureElement = document.createElement("figure");
        this.figureElement.classList = "banky__logo";

        this.bankyLogoElement = document.createElement("i");
        this.bankyLogoElement.classList = "fa-solid fa-piggy-bank";

        this.bankyLogotext = document.createElement("h1");
        this.bankyLogotext.classList = "banky__money";
        this.bankyLogotext.innerText = "Saldo $90";

        this.eyeButton = document.createElement("figure");
        this.eyeButton.classList = "banky__eye";

        this.eyeLogo = document.createElement("i");
        this.eyeLogo.classList = "fa-solid fa-eye";

        this.Transactions = document.createElement("ul")
        this.Transactions.classList = "banky__transactions";




        this.overboekenElement = document.createElement("button");
        this.overboekenElement.classList = "banky__transferButton";
        this.overboekenElement.innerText = "Overboeken";
    }

    makeTransactionsFromData(accountToShow, data) {
        
        let totalMoney = 0;
        for (let i = 0; i < data[accountToShow].length; i++){
            totalMoney += data[accountToShow][i]["amount"];
        }

        this.bankyLogotext.innerText ="Saldo: " +" €"+ totalMoney;
        this.divElement.appendChild(this.bankyLogotext);

        //empty ul before makeing li
        this.Transactions.innerHTML = "";

        for (let i = 0; i < data[accountToShow].length; i++) {

            this.Transaction = document.createElement("li");
            this.Transaction.classList = ("banky__transaction");
    
            this.transactionName = document.createElement("h3");
            this.transactionName.classList = "banky__name";
            this.transactionName.innerText = data[accountToShow][i]["from/to"];
    
    
            this.transactionAmount = document.createElement("h3");
            this.transactionAmount.classList = "banky__amount";
            this.transactionAmount.innerText = data[accountToShow][i]["amount"];

            this.Transactions.appendChild(this.Transaction);
            this.Transaction.appendChild(this.transactionName);
            this.Transaction.appendChild(this.transactionAmount);

        }
    }

    render() {
        this.mainElement.appendChild(this.sectionLeft);
        this.sectionLeft.appendChild(this.headerElement);
        this.headerElement.appendChild(this.divElement);
        this.divElement.appendChild(this.figureElement);
        this.figureElement.appendChild(this.bankyLogoElement);
        this.headerElement.appendChild(this.eyeButton);
        this.eyeButton.appendChild(this.eyeLogo);
        this.sectionLeft.appendChild(this.Transactions);

        this.sectionLeft.appendChild(this.overboekenElement);
    }

}

class Bankyrightsection {
    mainElement;
    leftSection;

    constructor(mainElement, leftSection) {
        this.mainElement = mainElement;
        this.leftSection = leftSection;

        this.sectionRight = document.createElement("section");
        this.sectionRight.classList = "banky__section banky__section--right";

        this.accounts = document.createElement("ul");
        this.accounts.classList = "banky__accounts";


    }

    makeButtonsFromData(data) {
        Object.entries(data).forEach((entry) =>{


            this.account = document.createElement("li");
            this.account.classList = "banky__account";
            this.account.onclick = () => {
                this.leftSection.makeTransactionsFromData(entry[0], data)
            }

            this.bankySwitchButton = document.createElement("button");
            this.bankySwitchButton.classList = "banky__switchAccount";
    
            this.accountFigure = document.createElement("figure");
            this.accountFigure.classList = "banky__logo";
    
            this.accountLogo = document.createElement("i");
            this.accountLogo.classList = "fa-solid fa-credit-card";
    
            this.accountName = document.createElement("h4");
            this.accountName.classList = "banky__nameOfAccount";
            this.accountName.innerText = entry[0];

            this.accounts.appendChild(this.account);
            this.account.appendChild(this.bankySwitchButton);
            this.bankySwitchButton.appendChild(this.accountFigure)
            this.accountFigure.appendChild(this.accountLogo);
            this.account.appendChild(this.accountName);
        })
        
    }

    render() {
        this.mainElement.appendChild(this.sectionRight);
        this.sectionRight.appendChild(this.accounts);

    }

}

class App {
    Header;
    Bankymain;
    GetDataFromApi;

    constructor() {
        this.header = new Header("body")
        this.Bankymain = new Bankymain("body");

        this.GetDataFromApi = new GetDataFromApi("./data/transactions.json");

        this.GetDataFromApi
            .getData().then((data) => {
                this.Bankymain.makeTransactionsFromData(data);
                this.Bankymain.makeButtonsFromData(data);

            });



        this.header.render();
        this.Bankymain.render();
    }
}

const app = new App();