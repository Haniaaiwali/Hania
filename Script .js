// Create an array of 50 colors
const colors = [
    '#FF5733', '#33FF57', '#3357FF', '#F1C40F', '#8E44AD',
    '#E74C3C', '#3498DB', '#2ECC71', '#1ABC9C', '#F39C12',
    '#C0392B', '#7F8C8D', '#34495E', '#2980B9', '#9B59B6',
    '#16A085', '#27AE60', '#FDEDEC', '#A569BD', '#B03A2E',
    '#2E86C1', '#52BE80', '#E74C3C', '#EBDEF0', '#E59866',
    '#5DADE2', '#F7DC6F', '#AF7AC5', '#229954', '#F4D03F',
    '#58D68D', '#85929E', '#C39BD3', '#85C1E9', '#D35400',
    '#1F618D', '#45B39D', '#D98880', '#5499C7', '#E74C3C',
    '#58D68D', '#F7DC6F', '#C39BD3', '#AF601A', '#D4E6F1',
    '#BB8FCE', '#F0B27A', '#7DCEA0', '#D5F5E3', '#F2D7D5'
];

// Keep track of the current color index
let colorIndex = 0;

// Add event listener for keydown event
document.addEventListener('keydown', function(event) {
    // Check if the pressed key is the spacebar
    if (event.code === 'Space') {
        // Change background color
        document.body.style.backgroundColor = colors[colorIndex];

        // Change text color to maintain contrast
        document.querySelector('h1').style.color = colors[(colorIndex + 25) % colors.length];

        // Move to the next color, looping back to the start if necessary
        colorIndex = (colorIndex + 1) % colors.length;
    }
});
