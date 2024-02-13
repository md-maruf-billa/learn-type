// Common function hare---------------

function display_hidden(elementId) {
    document.getElementById(elementId).classList.add('hidden');
}

function display_show(elementId) {
    document.getElementById(elementId).classList.remove('hidden');
}

// letter highlighter 
function random_letter() {
    const alphabet = "abcdefghijklmnopqrstuvwxyz"
    // convert to a array
    const alphabet_array = alphabet.split('');
    let word = alphabet_array[Math.round(Math.random() * alphabet_array.length-1)];

    return word;
}

function setKeyboard_button_color(key_button) {
    document.getElementById(key_button).classList.add('bg-orange-400')
}





// Onclick function hare-------------

function lets_play() {
    const ran = random_letter()
    display_hidden('lets-play');
    display_show('play-ground');
    document.getElementById('output-screen').innerText = ran;
    setKeyboard_button_color(ran)

}