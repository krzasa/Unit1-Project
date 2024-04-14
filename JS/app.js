const showcase = document.querySelector(".showcase")
const buttEle = document.querySelector(".bodyBut")
const mode = document.querySelector(".but")
let numPlace = 0
let modeNum = 0


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

mode.addEventListener("click", () => {
    if (modeNum ==0 ) {
        document.querySelector(".scanlines").style.background = "white"
        document.querySelector(".navBar").style.color = "black"
        // document.querySelector(".Logo").style.color = "black"
        document.querySelector(".textFoot").style.color = "black"
        document.querySelector(".logo").style.color = "black"
        modeNum = 1

        //Check in why the logo doesn't turn black
    } else {
        document.querySelector(".scanlines").style.background = "unset"
        document.querySelector(".navBar").style.color = "unset"
        // document.querySelector(".Logo").style.color = "black"
        document.querySelector(".textFoot").style.color = "unset"
        document.querySelector(".logo").style.color = "unset"
        modeNum = 0
        //How to remove the inline styles so you can go back to having the scanlines 
    }

})

// javascript:(function() {document.getElementsByTagName("html")[0].style.filter = "invert(1) hue-rotate(180deg)";Array.from(document.getElementsByTagName("img"), e => e.style.filter = "invert(1) hue-rotate(180deg)");})();

