/* MARIOKART */
'use strict';


// Event Listeners
document.getElementById('item-btn').addEventListener('click', getItem);
document.getElementById('reset-btn').addEventListener('click', reset);


// GLOBAL VARS
let kart = 1
let times = 1;

// Make table of karts
for (let kart_num = 1; kart_num < 4 + 1; kart_num++) {
    for (let col = 1; col < 3 + 1; col++) {
        document.getElementById('karts').innerHTML += "<div class='hover-kart' id='kart" + kart + "'><img src='images/kart" + kart++ + ".png'><br>" + (kart - 1) + "</div>";
    }
}

// Function
function getItem() {

    // CHECK
    console.log('item get');

    // POSITION VALUE
    let pos = Number(document.getElementById('num').value);

    for (let i = 1; i <= times; i++) {
        let rand = Math.random(); // 0 - 0.99
        console.log(rand);

        let result = document.getElementById('result');
        // POSITION PROBABILITY
        if (pos >= 1 && pos <= 6) { // Position 1-6
            console.log('positons1-6');
            document.getElementById('rare-item').classList.add('hidden');

            if (rand < 0.45) { // 45%
                result.innerHTML += '<img src="images/banana.png">';
            } else if (rand < 0.80) { // 35%
                result.innerHTML += '<img src="images/green_shell.png">';
            } else if (rand < 0.95) { // 15%
                result.innerHTML += '<img src="images/star.png">';
            } else if (rand < 0.99) { // 4%
                result.innerHTML += '<img src="images/gold_mush.png">';
            } else { // 1%
                result.innerHTML += '<img src="images/bullet.png">';
                document.getElementById('rare-item').classList.remove('hidden');
            }

        } else if (pos >= 7 && pos <= 12) { // Position 7-12
            console.log('positons7-12');

            document.getElementById('rare-item').classList.add('hidden');

            if (rand < 0.30) { // 30%
                result.innerHTML += '<img src="images/bullet.png">';
            } else if (rand < 0.65) { // 35%
                result.innerHTML += '<img src="images/gold_mush.png">';
            } else if (rand < 0.90) { // 25%
                result.innerHTML += '<img src="images/star.png">';
            } else if (rand < 0.95) { // 5%
                result.innerHTML += '<img src="images/green_shell.png">';
                document.getElementById('rare-item').classList.remove('hidden');
            } else {
                result.innerHTML += '<img src="images/banana.png">';
                document.getElementById('rare-item').classList.remove('hidden');

            }
        }
        // else {
        //     alert('Error! Invalid number. \nChoose a number between 1 and 12.');
        // }
    }
}

function reset() {
    document.getElementById('result').innerHTML = '';
    document.getElementById('rare-item').classList.add('hidden');

}

function times10() {
    times = 10;
}

function times100() {
    times = 100;
}

function timesX() {
    if (document.getElementById('numItems').value != '') {
    times = Number(document.getElementById('numItems').value);
    }
}