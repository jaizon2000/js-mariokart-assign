/* TITLE */
'use strict';



// Event Listeners
document.getElementById('item-btn').addEventListener('click', getItem);

// GLOBAL VARS


// Event Function
function getItem() {
    let pos = Number(document.getElementById('num').value);
    
    let rand = Math.random();

    if (pos >= 1 && pos <= 6) { // Position 1-6
        console.log('positons1-6');


    } else if (pos >= 7 && pos <= 12) { // Position 7-12
        console.log('positons7-12');

    } else {
        alert('Error! Invalid number. Choose a number between 1 and 6.')
    }
}

