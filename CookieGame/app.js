let viewerElement = document.querySelector(".viewContainer");

let direcElement = document.querySelector('.messageCon')

const rewardButton = document.querySelector('.rewardButt')
const restartButton = document.querySelector('.restart')


rewardButton.addEventListener('click', () =>{ 
    while(viewerElement.firstChild){
        viewerElement.removeChild(viewerElement.firstChild)
    }
        console.log('This works');
    const elem = document.createElement("img");
    const mess = document.createElement('h3')

    elem.setAttribute("src", "./cookie.jpg");
    elem.setAttribute("height", "612");
    elem.setAttribute("width", "612");
    elem.setAttribute("alt", "Cookie");
    mess.textContent = "YOU WON A COOKIE"
    viewerElement.appendChild(elem)
    direcElement.removeChild(direcElement.firstChild)
    direcElement.appendChild(mess)

})

restartButton.addEventListener('click', () =>{ 
    while(viewerElement.firstChild){
        viewerElement.removeChild(viewerElement.firstChild)
    }
    direcElement.textContent = "Don't be Scared, press the button!"

    
})