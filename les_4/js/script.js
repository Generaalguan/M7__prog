const colors = document.getElementsByClassName("colors__color");

for (let i = 0; i < colors.length; i++){
    /*set color */

    let randomhue = Math.floor( Math.random() * (360 - 1) + 1);
    let randomsaturation = Math.floor( Math.random() * (79 - 11) + 11) + "%"; 
    let randomwhiteness = Math.floor( Math.random() * (100 - 11) + 11) + "%";
    colors[i].children[0].style.background = `hsl(${randomhue} ${randomsaturation} ${randomwhiteness})`;
    console.log(randomhue, randomsaturation, randomwhiteness);
    

    /*onclick*/
    colors[i].onclick = function () {
        colors[i].children[0].classList.add("colors__circle--selected");
        navigator.clipboard.writeText(colors[i].children[0].style.background);
        document.title = colors[i].children[0].style.background;
        console.log(colors[i].children[0].style.background)
    }
}

