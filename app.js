const board = document.getElementById('board');
const colors = [
    '#e74c3c', '#8e44ad', '#3498db', '#e67e22', '#2ecc71',
    '#fe4a49', '#2ab7ca', '#fed766', '#f6abb6', '#f4b6c2',
    '#011f4b', '#03396c', '#005b96', '#6497b1', '#851e3e',
    '#651e3e', '#451e3e'
];
const SQUARES_NUMBER = 500;

for (let i = 0; i<SQUARES_NUMBER; i++) {
    const square = document.createElement('div');
    square.classList.add('square');

    square.addEventListener('mouseover', () => setColor(square));
    square.addEventListener('mouseleave', () => removeColor(square));

    board.append(square);
}

function setColor(element) {
    const color = getRandomColor();
    element.style.backgroundColor = color;
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
}

function removeColor(element) {
    element.style.backgroundColor = '#1d1d1d';
    element.style.boxShadow = '0 0 2px #000000';
}

function getRandomColor() {
    const index = Math.floor(Math.random() * colors.length);
    return colors[index];
}