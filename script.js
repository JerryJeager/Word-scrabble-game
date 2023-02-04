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


function generateRandomScrabble(inputLength){
    randomScrabbleWord = Math.floor(Math.random() * wordsArr.length)
    hint.textContent = `Hint: ${wordsArr[randomScrabbleWord].hint}`
    correctWord = wordsArr[randomScrabbleWord].word
    inputLength.setAttribute('maxlength', correctWord.length)
    rearrangedWord = wordsArr[randomScrabbleWord].word.split('')
    for(let i = 0; i < rearrangedWord.length; i++){
        randomShuffleIndex = Math.floor(Math.random() * rearrangedWord.length)
        let swap = rearrangedWord[i]
        rearrangedWord[i] = rearrangedWord[randomShuffleIndex]
        rearrangedWord[randomShuffleIndex] = swap
    }
    scrabbledWord.textContent = rearrangedWord.join('').toUpperCase()
    
}


function checkWord(){
    if(scrabbleAnswer.value.toLowerCase() !== correctWord.toLowerCase()){
        alert(`oops ${scrabbleAnswer.value} is not the correct word`)
    }else{
        alert(`congrats ${correctWord.toUpperCase()} is the correct word`)
    }
}

checkBtn.addEventListener('click', () => {
    checkWord(scrabbleAnswer.value)
})

generateRandomScrabble(scrabbleAnswer)

refreshBtn.addEventListener('click', () => {
    generateRandomScrabble(scrabbleAnswer)
})
