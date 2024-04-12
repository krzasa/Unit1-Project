const showcase = document.querySelector(".showcase")
const buttEle = document.querySelector(".bodyBut")
let numPlace = 0


buttEle.addEventListener("click", () =>{
    console.dir(showcase)
    showcase.style.display = 'inline';  // command to make the iframe appear
    if(numPlace === 0){  // if the number variable is 0 show the calculator and then chage the number to 1
        
        showcase.src = "https://krzasa.github.io/dom-events-lab/"
        numPlace = 1
        return
    } else { // else if the number variable is 1 show the tic tac toe and change the number variable 0
        showcase.src = "https://krzasa.github.io/terminal-game-part2/index.html"
        numPlace = 0
        return
    }


})

window.onload = function() {  // when the page loads hide the iframe 

    showcase.style.display = 'none';
}