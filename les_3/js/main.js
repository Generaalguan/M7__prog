const colors = document.getElementsByClassName("colors__color");
let secondColor = false;

for (let i = 0; i < colors.length; i++){
    /*set color */
    if (secondColor === false) {
        colors[i].children[0].style.background = "#000647"
        secondColor = true;
    }
    else {
        colors[i].children[0].style.background = "#647000"
        secondColor = false;
    }
    

    /*onclick*/
    colors[i].onclick = function () {
        colors[i].children[0].classList.add("colors__circle--selected");
        navigator.clipboard.writeText();
        document.title = colors[i].children[0].style.background;
        console.log(colors[i].children[0].style.background)
    }
}

