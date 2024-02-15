

let score = findInnerHtml('score');
let life = findInnerHtml('life');
console.log(life)
let score_value = parseInt(score.innerText);
let life_value = parseInt(life.innerText);
// Common function hare---------------

function findInnerHtml(userId) {
    return document.getElementById(userId);

}
function display_hidden(elementId) {
    document.getElementById(elementId).classList.add('hidden');
}

function display_show(elementId) {
    document.getElementById(elementId).classList.remove('hidden');
}


function display_append() {
    const word = random_letter()
    document.getElementById('output-screen').innerText = word;
    setKeyboard_button_color(word)

}

function user_press(event) {
    let find_key = event.key;
    let update_screen = document.getElementById('output-screen').innerText.toLocaleLowerCase();

    // ---Checking condition on find_key and update_screen are same or not

    if (find_key === update_screen) {
        score_value += 1;
        score.innerText = score_value;
        removeKeyboard_button_color(update_screen);
        display_append();
    }
    else {
        life_value -= 1;
        life.innerText = life_value;
        console.log(life_value)
    }
    if (find_key === 'Escape' || life_value <= 0) {
        gameOver()
    }

}

// letter highlighter 
function random_letter() {
    const alphabet = "abcdefghijklmnopqrstuvwxyz"
    // convert to a array
    const alphabet_array = alphabet.split('');
    // generate a random alphabet
    let word = alphabet_array[Math.round(Math.random() * 25)];
    return word;
}

function setKeyboard_button_color(key_button) {
    document.getElementById(key_button).classList.add('bg-green-400');
}
function removeKeyboard_button_color(key_button) {
    document.getElementById(key_button).classList.remove('bg-green-400', 'bg-red-400');
}







// Onclick function hare-------------

function lets_play() {
    score_value = 0;
    life_value = 5;
    findInnerHtml('score').innerText = score_value;
    findInnerHtml('life').innerText = life_value;
    display_hidden('lets-play');
    display_show('play-ground');
    display_hidden('see-score')
    display_append()
    document.addEventListener('keyup', user_press);

    // -----reset score 
    
}


function gameOver() {
    display_hidden('play-ground');
    display_show('see-score');

    // append final score
    document.getElementById('final-score').innerText = score.innerText;

    // reset play ground
    let display = document.getElementById('output-screen').innerText.toLocaleLowerCase()
    removeKeyboard_button_color(display);
}
