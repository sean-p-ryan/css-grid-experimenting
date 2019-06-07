let button = document.querySelector("#trigger");
let squaresArray = Array.prototype.slice.call(document.querySelectorAll("#square"));
let squaresChangingColor = false;

button.addEventListener('click', changeSquareColors());

const changeSquareColors = () => {
    // iterate through squares array and set background color of each to random color
}

const generateRandomColor = () => {
    // return random
}