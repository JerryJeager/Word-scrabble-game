import { wordsArr } from "./words.js";

const scrabbledWord = document.querySelector(".scrabbled-word")
const hint = document.querySelector('.hint')
const time = document.querySelector('.time')
const scrabbleAnswer = document.querySelector('.answer')
const refreshBtn = document.querySelector('.refresh-btn')
const checkBtn = document.querySelector('.check-btn')
let randomScrabbleWord = ''
let rearrangedWord = ''
let randomShuffleIndex = 0
let correctWord = ''
let defaultTime = 30


window.addEventListener('load', () => {
    reduceTime(defaultTime)
})


function generateRandomScrabble(inputLength) {
    randomScrabbleWord = Math.floor(Math.random() * wordsArr.length)
    hint.textContent = `Hint: ${wordsArr[randomScrabbleWord].hint}`
    correctWord = wordsArr[randomScrabbleWord].word
    inputLength.setAttribute('maxlength', correctWord.length)
    rearrangedWord = wordsArr[randomScrabbleWord].word.split('')
    for (let i = 0; i < rearrangedWord.length; i++) {
        randomShuffleIndex = Math.floor(Math.random() * rearrangedWord.length)
        let swap = rearrangedWord[i]
        rearrangedWord[i] = rearrangedWord[randomShuffleIndex]
        rearrangedWord[randomShuffleIndex] = swap
    }
    scrabbledWord.textContent = rearrangedWord.join('').toUpperCase()

}


checkBtn.addEventListener('click', () => {
    if (scrabbleAnswer.value.toLowerCase() !== correctWord.toLowerCase()) {
        alert(`incorrect word`)
    } else {
        alert(`congrats ${correctWord.toUpperCase()} is the correct word`)
        scrabbleAnswer.value = ''
        generateRandomScrabble(scrabbleAnswer)
        defaultTime = 30
    }
})

generateRandomScrabble(scrabbleAnswer)

refreshBtn.addEventListener('click', refresh)

function refresh(){
    generateRandomScrabble(scrabbleAnswer)
    scrabbleAnswer.value = ''
    defaultTime = 30
}

function reduceTime() {
    setTimeout(() => {
        if (defaultTime < 0) {
            alert(`Time up: ${correctWord.toUpperCase()} is the correct word`)
            refresh()
        }
        time.textContent = `Time Left: ${defaultTime--}s`
        reduceTime(defaultTime)
    }, 1000)
}