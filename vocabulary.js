var words = [
    {word: "Hi", meaning: "greeting"},
    {word: "Cat", meaning: "Animal"}
]

function showRandomWord() {
    var randomWord = words[Math.floor(Math.random() * words.length)];
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