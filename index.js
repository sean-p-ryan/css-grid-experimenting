let button = document.querySelector("#trigger");
let squaresArray = Array.prototype.slice.call(document.querySelectorAll("#square"));
let squaresChangingColor = false;

const changeSquareColors = () => {
    if (squaresChangingColor) {
        setTimeout(() => {
            squaresArray.forEach(square => {
                square.style.backgroundColor = generateRandomColor();
            })
            changeSquareColors();
        }, 200)
    }
}

const setSquaresChangingColor = () => {
    (squaresChangingColor) ?
        squaresChangingColor = false :
        squaresChangingColor = true;
    // call changeSquareColors
    changeSquareColors();
}

const generateRandomColor = () => {
    // return random color
    let randomColor = Math.floor(Math.random() * 16777215).toString(16);
    return "#" + randomColor;
}

button.addEventListener('click', setSquaresChangingColor);