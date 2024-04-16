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
        document.querySelector("#sec-one").style.background = "white"
        document.querySelector(".scanlines").style.animation = "none"; //removes the animation to remove black bar 
        document.querySelector(".navBar").style.color = "black"
        document.querySelector(".navBar").style.background = "white"
        document.querySelector(".logoLink").style.color = "black"
        document.querySelector(".textFoot").style.color = "black"
        // document.querySelector(".logo").style.color = "black"
        modeNum = 1

        //How to force the css to be in first keyframe to minimize blackspace 
    } else {
        document.querySelector(".scanlines").removeAttribute("style")
        document.querySelector("#sec-one").removeAttribute("style")
        // document.querySelector(".scanlines").style.webkitAnimationPlayState = "running";
        document.querySelector(".navBar").removeAttribute("style")
        document.querySelector(".logoLink").removeAttribute("style")
        document.querySelector(".textFoot").removeAttribute("style")
        modeNum = 0
        
    }

})


