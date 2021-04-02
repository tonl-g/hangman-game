const chalk = require('chalk')
const readlineSync = require('readline-sync')
const { readFileSync } = require('fs')
const { randomInt } = require('crypto')

// Start game
if (readlineSync.keyInYNStrict(`Do you want play Hangman's Game? `)) {
  // 'Y' key was pressed.
  console.log('Start')
  // continuer le programme
  } else {
  // 'N' key was pressded.
  console.log('Bye')
  process.exit(0)
  } 

// Read dictionnary
const readDic = readFileSync('./dictionnary.txt', 'utf-8')
// console.log(readDic)

// Create array 
const wordsDic = readDic.toLowerCase().split('\n')
// console.log(words)

// Random array
const randWord = randomInt(0, wordsDic.length)
console.log(wordsDic[randWord]) 

// Boucle
let isRunning = true
while (isRunning) {
  const findWord = readlineSync.question('Guess the word: ')
  if (findWord != (wordsDic[randWord])) {
    console.log(`It's not the good word`)
    if (readlineSync.keyInYNStrict(`Do you want to continue? `)) {
      // 'Y' key was pressed.
      console.log('Restart')
      // continuer le programme
      } else {
      // 'N' key was pressded.
      console.log('Bye')
      process.exit(0)
      } 
  } else { (findWord === (wordsDic[randWord])) 
    console.log(`Congratulation! You find the good word '${(wordsDic[randWord])}'`)
    // Exit the loop
    isRunning = false
  }
}

