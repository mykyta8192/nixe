var allWords = {}
var words = []



function levelWords(level) {
    fetch('data/words.json')
        .then (res => res.json())
        .then (data => {
            allWords = data;
            words = allWords[level];
            showRandomWord()
        })
}

function showRandomWord() {
    var randomWord = words[Math.floor(Math.random() * words.length)];
    var meaning = document.querySelector('.vocabulary_meaning');
    if (meaning.style.display != 'none') {
        showOtherSide()
    }
    document.getElementById('word_text').textContent = randomWord.word;
    document.getElementById('meaning_text').textContent = randomWord.meaning;
}

function showOtherSide() {
    var meaning = document.querySelector('.vocabulary_meaning');
    var word = document.querySelector('.vocabulary_word')
    if (meaning.style.display == 'none') {
        meaning.style.display = 'block';
        word.style.display = 'none'
    } else {
        meaning.style.display = 'none';
        word.style.display = "block"
    }
}

window.onload = function() {
    showRandomWord()
}
