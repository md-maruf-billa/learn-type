// ------common variable hare
let score = document.getElementById('score');
let life = document.getElementById('life');
let score_value = 0;
let life_value = 10;
// Common function hare---------------

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
        wrongKeyboard_button_press(find_key);
    }
    
    
}

// letter highlighter 
function random_letter() {
    const alphabet = "abcdefghijklmnopqrstuvwxyz"
    // convert to a array
    const alphabet_array = alphabet.split('');
    // generate a random alphabet
    let word = alphabet_array[Math.round(Math.random() * alphabet_array.length - 1)];
    return word;
}

function setKeyboard_button_color(key_button) {
    document.getElementById(key_button).classList.add('bg-green-400');
}
function removeKeyboard_button_color(key_button) {
    document.getElementById(key_button).classList.remove('bg-green-400','bg-red-400');
}
function wrongKeyboard_button_press(key_button) {
    document.getElementById(key_button).classList.add('bg-red-400');
}






// Onclick function hare-------------

function lets_play() {
    display_hidden('lets-play');
    display_show('play-ground');
    display_append()
    
}

document.addEventListener('keyup', user_press);