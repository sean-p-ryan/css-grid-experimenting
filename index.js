let button = document.querySelector("#trigger");
let squaresArray = Array.prototype.slice.call(document.querySelectorAll("#square"));
let effectsInProgress = false;

const effectsTrigger = () => {
    // call changeSquareColors
    alternateEffectsInProgress();
    changeSquareColors();
    changeButtonText();
}

const alternateEffectsInProgress = () => {
    (effectsInProgress) ?
        effectsInProgress = false :
        effectsInProgress = true;
}

const changeButtonText = () => {
    (effectsInProgress) 
    ?
    button.innerText = "RESTORE ORDER"
    :
    button.innerText = "UNLEASH CHAOS"
}

const changeSquareColors = () => {
    if (effectsInProgress) {
        setTimeout(() => {
            squaresArray.forEach(square => {
                square.style.backgroundColor = generateRandomColor();
            })
            changeSquareColors();
        }, 200)
    }
}

const generateRandomColor = () => {
    // return random color
    let randomColor = Math.floor(Math.random() * 16777215).toString(16);
    return "#" + randomColor;
}

button.addEventListener('click', effectsTrigger);