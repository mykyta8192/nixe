var allWords = {}
var words = []



function levelWords(level, button) {
    const allButtons = document.querySelectorAll('.level_button');
    allButtons.forEach(btn => btn.style.backgroundColor = "aqua");
    button.style.backgroundColor = "blue";
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

function saveThisWord() {
    var saveWord = document.getElementById('word_text').textContent;
    var saveMeaning = document.getElementById('meaning_text').textContent;

    let savedWords = JSON.parse(localStorage.getItem("savedWords")) || []

    if (!savedWords.find(entry => entry.word === saveWord)) {
        savedWords.push({word: saveWord, meaning: saveMeaning});
        localStorage.setItem("savedWords", JSON.stringify(savedWords));
        alert('Word saved!')
    } else {
        alert('This word was saved previosly!')
    }
}

function showSavedWords() {
    let savedWords = JSON.parse(localStorage.getItem("savedWords")) || [];
    var randomWord = savedWords[Math.floor(Math.random() * savedWords.length)];
    var meaning = document.querySelector('.vocabulary_meaning');
    if (meaning.style.display != 'none') {
        showOtherSide()
    }
    document.getElementById('word_text').textContent = randomWord.word;
    document.getElementById('meaning_text').textContent = randomWord.meaning;
}

function deleteSavedWords() {
    localStorage.removeItem('savedWords');
    alert('Words were deleted')
}

window.onload = function() {
    levelWords('a1', main_level)
}
