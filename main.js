const chalk = require('chalk')
const readlineSync = require('readline-sync')
const { readFileSync } = require('fs')
const { randomInt } = require('crypto')

/* // Start game
if (readlineSync.keyInYNStrict(`Do you want play Hangman's Game? `)) {
  // 'Y' key was pressed.
  console.log('Continue...')
  // continuer le programme
  } else {
  // 'N' key was pressded.
  console.log('Goodbye!')
  process.exit(0)
  } */

//
const readDic = readFileSync('./dictionnary.txt', 'utf-8')
// console.log(readDic)

const wordsDic = readDic.toLowerCase().split('\n')
// console.log(words)

const randWord = randomInt(0, wordsDic.length)
console.log(wordsDic[randWord]) 

let isRunning = true
while (isRunning) {
  const findWord = readlineSync.question('Guess a word: ')
  if (findWord != (wordsDic[randWord])) {
    console.log(`It's not a good word`)
  } else { (findWord === (wordsDic[randWord])) 
    console.log(`You find the good word ${(wordsDic[randWord])}`)
    // exit the loop
    isRunning = false
  }
}

