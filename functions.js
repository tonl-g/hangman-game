const chalk = require('chalk')
const readlineSync = require('readline-sync')
const fs = require('fs')
const { readFileSync } = require('fs')
const { randomInt } = require('crypto')

// Start game
const startGame = () => {
if (readlineSync.keyInYNStrict(chalk.blue(`Do you want play Hangman's Game? `))) {
  // 'y' key was pressed.
  console.log('Start')
  // continuer le programme
  } else {
  // 'n' key was pressed.
  console.log('Bye')
  process.exit(0)
  } 
}

// Continue Game
const continueGame = () => {
  if (readlineSync.keyInYNStrict(`Do you want to continue? `)) {
    // 'y' key was pressed.
    console.log('Restart')
    // continuer le programme
    } else {
    // 'n' key was pressed.
    console.log('Bye')
    process.exit(0)
    } 
}

const loopGame = () => {
  let isRunning = true
  let clueWord = Array((wordsDic[randWord]).length).fill('_')
  console.log(`Indice: ${clueWord.length} lettres`)
  console.log(`${clueWord.join(' ')}`)
  let counter = 7

  while (isRunning) {
    const findWord = readlineSync.question(chalk.blue('Guess the word: '))
    const matchLetters = ((wordsDic[randWord]).match(findWord))
    
    if (isRunning = true) {
      console.log(`Il vous reste ${counter -= 1} tentatives`)
    } else {
      isRunning = false
    }

    if (findWord != (wordsDic[randWord])) {
      console.log(chalk.green(`Good: ${matchLetters}`))
      console.log(chalk.red(`It's not the good word!`))
      
      continueGame()
    
    } else { (findWord === (wordsDic[randWord])) 
      console.log(chalk.green(`Congratulation! You find the good word '${(wordsDic[randWord])}'!!!`))
      // Exit the loop
      isRunning = false
    }
  }
}

// Read dictionnary
const readDic = fs.readFileSync('./dictionnary.txt', 'utf-8')
// console.log(readDic)

// Create array 
const wordsDic = readDic.toLowerCase().split('\n')
// console.log(words)

// Random array
const randWord = randomInt(0, wordsDic.length)
// console.log(wordsDic[randWord]) // Test word

exports.startGame = startGame
exports.continueGame = continueGame
exports.loopGame = loopGame
exports.readDic = readDic
exports.wordsDic = wordsDic
exports.randWord = randWord
