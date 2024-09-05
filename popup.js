document.addEventListener('DOMContentLoaded', function() {
    let count = localStorage.getItem('count') ? parseInt(localStorage.getItem('count')) : 0;

    const countDisplay = document.getElementById('number-display');
    const addButton = document.getElementById('add-button');
    const minusButton = document.getElementById('minus-button');
    const restartButton = document.getElementById('restart-button');


    addButton.addEventListener('click', function() {
        count += 1;
        countDisplay.textContent = count;
        localStorage.setItem('count', count);
    });

    minusButton.addEventListener('click', function() {
        count -= 1;
        countDisplay.textContent = count;
        localStorage.setItem('count', count);
    });

    restartButton.addEventListener('click', function() {
        count = 0;
        countDisplay.textContent = count;
        localStorage.setItem('count', count);
    });

});