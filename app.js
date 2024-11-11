const quoteDisplayElement = document.getElementById('quoteDisplay')
const quoteInputElement = document.getElementById('quoteInput')
const startButton = document.getElementById('startButton')

let quotes = [
    "Sometimes you have to do things you don't want to do in order to survive.",
    "But his delight is in the law of the Lord; and in his law doth he meditate day and night.",
    "The world is full of things that make it difficult to keep living, but even so, you have to keep going.",
    "The ungodly are not so: but are like the chaff which the wind driveth away.",
    "The future is in your hands. You must create the future with your own two hands."
]

let currentQuote = ''
let gameInProgress = false

startButton.addEventListener('click', startGame)
quoteInputElement.addEventListener('input', checkInput)

function startGame() {
    gameInProgress = true
    startButton.disabled = true
    quoteInputElement.disabled = false
    quoteInputElement.value = ''
    quoteInputElement.focus()
    setNewQuote()
}

function setNewQuote() {
    currentQuote = quotes[Math.floor(Math.random() * quotes.length)]
    quoteDisplayElement.innerHTML = ''
    currentQuote.split('').forEach(char => {
        const charSpan = document.createElement('span')
        charSpan.innerText = char
        quoteDisplayElement.appendChild(charSpan)
    })
}
    function checkInput() {
        const quoteSpans = quoteDisplayElement.querySelectorAll('span');
        const inputChars = quoteInputElement.value.split('');
        let correct = true;

        for (let i = 0; i < quoteSpans.length; i++) {
            const charSpan = quoteSpans[i];
            const inputChar = inputChars[i];

            if (inputChar === undefined) {
                charSpan.classList.remove('correct', 'incorrect');
                correct = false;
            } else if (inputChar === charSpan.innerText) {
                charSpan.classList.add('correct');
                charSpan.classList.remove('incorrect');
            } else {
                charSpan.classList.remove('correct');
                charSpan.classList.add('incorrect');
                correct = false;
            }
        }

        if (correct) {
            endGame();
        }
    }


    function endGame() {
        quoteInputElement.disabled = true
        startButton.disabled = false
        gameInProgress = false
        startButton.textContent = 'Play Again'
    }
